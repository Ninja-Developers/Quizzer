// importing modules 
import { useRef, useState } from 'react'

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
import Axios from 'axios'

const useStyle = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(4, 4),
        margin: theme.spacing(4, 0)
    }
}))



const Create = () => {
    const classes = useStyle();
    let [qCount, setQCount] = useState(1);
    let [dialog, setDialog] = useState(false);
    let [isGen, setGen] = useState(false);
    let [url, seturl] = useState('');
    let dialogClose = () => {
        setDialog(!dialog);
    }
    let mainRef = useRef(null);
    let count = [];
    const updateCountArray = (num: number) => {
        let update = [];
        for (let i = 0; i < num; i++) {
            update.push(i);
        }

        count = update;
    }

    updateCountArray(qCount)

    /**
     * 
     */
    const generateQuiz = async () => {
        let formParser = new FormParser(mainRef)
        let form: Array<Quiz> = formParser.genForm();
        generateUrl(form)
        dialogClose();
    }

    const generateUrl = async (form: Array<Quiz>) => {
        Axios({
            method: 'POST',
            url: '/api/quiz',
            data: {
                question: JSON.stringify(form)
            }
        }).then(res => {
            setGen(true);
            seturl(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
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