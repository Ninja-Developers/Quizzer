import React from 'react'
import {
    Fab,
    Tooltip
} from '@material-ui/core'

import { Add } from '@material-ui/icons'

const AddQuestion = props => {

    return <>
        <Tooltip title="add question">
            <Fab onClick={props.onClick}>
                <Add />
            </Fab>
        </Tooltip>
    </>
}

export default AddQuestion