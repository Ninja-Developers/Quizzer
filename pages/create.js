import { useState } from 'react'

import Questions from '../components/questions/quiz.holder'

import {
    Container,
    Grid
} from '@material-ui/core'

import { Addquestion } from '../components/buttons'

class Worksheet{
    constructor(question, options, answer){
        this.question = question
        this.options = options
        this.answer = answer
    }
}


const Create = props => {

    const [worksheet, setWorksheet] = useState([new Worksheet("What is my name", ['Souvik', 'Shounak', 'Hahah'] , 0), new Worksheet('',[],null)])

    const [check, setCheck] = useState([{ name: 'Souvik' }, { name: 'Shounak' }])

    const handleChange = (e, index) => {
        let value = e.target.value
        check[index].name = value
        let x = []
        check.forEach((el, i) => {
            if (i === index) {
                let s = { name: value }
                x.push(s)
            } else {
                let m = { ...el }
                x.push(m)
            }

        })
        setCheck(x)
    }

    return <>
        <Container>
            <Grid container spacing={2}>
                {worksheet.map(el => <Grid item xs={12} ><Questions data={el} /></Grid>)}


            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={11} />

                <Grid item xs={1}>
                    <Addquestion onClick={() => {console.log(JSON.stringify(worksheet))}} />
                </Grid>

            </Grid>

        </Container>
    </>
}

export default Create