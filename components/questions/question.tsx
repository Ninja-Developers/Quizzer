import React, { useState, ChangeEvent } from 'react'

import {
    Grid,
    FormControl,
    TextField,
    Select,
    MenuItem
} from '@material-ui/core'

// importing custom components 
import Options from './options'
import Answer from './answers'


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

export default Question