import React from 'react'

import {
    Grid,
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core'


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

export default Answer