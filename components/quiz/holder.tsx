import {
    Grid,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@material-ui/core';

interface Props {
    question: string,
    options: Array<string>
}

const Holder = (props: Props) => {


    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        {props.question}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <RadioGroup>
                            {props.options.map(el => {
                                return <FormControlLabel value={el} control={<Radio color="primary" />} label={el}   />
                            })}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default Holder;