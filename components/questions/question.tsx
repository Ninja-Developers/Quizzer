import React from 'react'

import {
    FormControl, 
    TextField
} from '@material-ui/core'


interface props {
    question: string
}

const Question = (props: props) => {

    return <>
    <FormControl fullWidth>

        <TextField value={props.question} />

    </FormControl>
    </>
}

export default Question