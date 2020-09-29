// importing modules 
import { useRef, useState } from 'react'

import {
    Grid,
    FormControl,
    TextField
} from '@material-ui/core'

const Question = () => {

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField variant="outlined" />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

const Create = () => {
    const mainRef = useRef(null)
    const [quizCount, setQuizCount] = useState([1, 2, 3])
    return <>
        <div>
            <div ref={mainRef}>
                {quizCount.map(el => <Question />)}
            </div>

            <button onClick={() => {
                console.log(mainRef.current.children[0].children[0].children[0].children[0].children[0].children[0].children[0].value)
                
            }}>Press</button>
        </div>
    </>
}



export default Create