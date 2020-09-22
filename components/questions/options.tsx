import React from 'react'

import {
    FormControl,
    TextField
} from '@material-ui/core'

interface props {
    options: Array<string>
}

const Options = (props: props) => {

    return <>
        {props.options.map(el => <>
            <FormControl fullWidth>
                <TextField value={el} />

            </FormControl>
        </>)}
    </>
}

export default Options