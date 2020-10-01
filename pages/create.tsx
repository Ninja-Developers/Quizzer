// importing modules 
import { useRef, useState, CSSProperties, ChangeEvent } from 'react'

import {
    Grid,
    FormControl,
    TextField,
    Paper,
    Container,
    makeStyles,
    Theme,
    Select,
    MenuItem
} from '@material-ui/core'

const useStyle = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(4, 4),
        margin: theme.spacing(4, 0)
    }
}))

const Question = () => {

    const [optCount, setOptCount] = useState(2)

    const selectHandler = (event: ChangeEvent<{ value: unknown }>) => {
        setOptCount(event.target.value as number);
    }


    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField variant="standard" label="Question" />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <Select
                            value={optCount}
                            onChange={selectHandler}
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Options optionCount={optCount} />
                </Grid>
                <Grid item xs={2}>
                    <Answer optionCount={optCount} />
                </Grid>
            </Grid>
        </div>
    )
}

const Options = ({ optionCount }) => {

    let count = []
    for (let i = 0; i < optionCount; i++) {
        count.push(i)
    }

    return (
        <div>
            <Grid container spacing={2}>
                {count.map(el => <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField label={`option ${el + 1}`} />
                    </FormControl>
                </Grid>)}
            </Grid>
        </div>
    )
}

const Answer = ({ optionCount }) => {
    let count = []
    for (let i = 0; i < optionCount; i++) {
        count.push(i)
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Select>
                            {count.map(el => <MenuItem value={el + 1}>{el + 1}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}



const Create = () => {
    const classes = useStyle()
    return <>
        <div>
            <Container>
                <Paper variant="outlined" className={classes.paper}>
                    <Question />
                </Paper>
            </Container>
        </div>
    </>
}



export default Create