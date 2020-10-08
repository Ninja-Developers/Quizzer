// importing modules 
import { useRef, useState, CSSProperties, ChangeEvent } from 'react'

import {
    Grid,
    Paper,
    Container,
    makeStyles,
    Theme,
    Button
} from '@material-ui/core'

// importing custom components 
import { Question } from '../components/questions'

import { FormParser, Quiz } from '../lib/parser'

const useStyle = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(4, 4),
        margin: theme.spacing(4, 0)
    }
}))



const Create = () => {
    const classes = useStyle()
    let [qCount, setQCount] = useState(1)
    let mainRef = useRef(null)
    let count = []
    const updateCountArray = (num: number) => {
        let update = []
        for (let i = 0; i < num; i++) {
            update.push(i)
        }

        count = update
    }

    updateCountArray(qCount)



    return <>
        <div>
            <Container>

                <div ref={mainRef}>
                    {count.map(el => <Paper variant="outlined" className={classes.paper}><Question /></Paper>)}
                </div>

                <Grid container spacing={4}>
                    <Grid item xs={10}>
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => {
                                let formParser = new FormParser(mainRef)
                                let form: Array<Quiz> = formParser.genForm();
                                console.log(JSON.stringify(form))
                            }}
                        >
                            Create Quiz
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => {
                            setQCount(qCount + 1)
                            updateCountArray(qCount)
                        }}>
                            Add Question
                        </Button>
                    </Grid>
                </Grid>
            </Container>


        </div>
    </>
}



export default Create