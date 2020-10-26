import { useState } from 'react'
import {
    Container,
    Grid,
    Typography,
    makeStyles,
    Button
} from '@material-ui/core'

import {
    purple
} from '@material-ui/core/colors'

import Holder from './holder'

const useStyle = makeStyles(theme => ({
    logo: {
        color: purple[600]
    },
    quiz: {
        marginTop: theme.spacing(14)
    }
}))

interface Props {
    quiz: Array<Object>
}

const Quiz = (props: Props) => {

    const classes = useStyle();
    let [quizNum, setQuizNum] = useState(0);
    let len = props.quiz.length

    return (
        <div>
            <Typography variant="h3" className={classes.logo} >
                Quizzer
            </Typography>

            <Container>
                <div className={classes.quiz}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Holder question={props.quiz[quizNum].question} options={props.quiz[quizNum].options} />
                        </Grid>

                        <Grid item xs={6}>
                            <Button>
                                next
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Quiz;