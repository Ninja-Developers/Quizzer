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
import { QuizDialog } from '../components/dialog'

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
    let [dialog, setDialog] = useState(false)
    let dialogClose = () => {
        setDialog(!dialog)
    }
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

    /**
     * 
     */
    const generateQuiz = async () => {
        let formParser = new FormParser(mainRef)
        let form: Array<Quiz> = formParser.genForm();
        alert(JSON.stringify(form))
        dialogClose();
    }


    return <>
        <div>
            <QuizDialog open={dialog} onClose={dialogClose} yes={generateQuiz} />
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

                                setDialog(!dialog)
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