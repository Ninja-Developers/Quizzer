// importing modules 
import { useRef, useState, CSSProperties } from 'react'

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
                        value={2}
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Options optionCount={2} />
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
                        <TextField label={`option ${el + 1 }`} />
                    </FormControl>
                </Grid>)}
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