import React, { useState } from 'react'
import Question from './question'
import Options from './options'

import {
    Container,
    makeStyles,
    FormControl,
    TextField,
    Grid,
    Paper
} from '@material-ui/core'

interface props {
    question: string,
    options: Array<string>,
    answer: number
}

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 6)
    }
}))

const QuizHolder = (props: props) => {

    const classes = useStyle()

    return <>
        <Container>
            <Paper className={classes.root}>

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Question question={props.question} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Options options={props.options} />

                    </Grid>

                </Grid>



            </Paper>
        </Container>
    </>
}

export default QuizHolder