import React, { useState } from 'react'

import {
    Container,
    makeStyles,
    FormControl,
    TextField,
    Grid
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

    const [question, setQuestion] = useState(props.question)

    const [options, setOptions] = useState(props.options)

    const [answer, setAnswer] = useState(props.answer)

    const classes = useStyle()

    return <>
        <Container className={classes.root}>

            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            value={question}
                        />
                    </FormControl>

                    <Grid item xs={12}>

                        <Grid container spacing={2}>
                            {options.map(el => <>
                                <FormControl fullWidth>
                                    <TextField
                                        value={el}
                                    />
                                </FormControl>
                            </>)}
                        </Grid>

                    </Grid>
                    
                </Grid>

            </Grid>

        </Container>
    </>
}

export default QuizHolder