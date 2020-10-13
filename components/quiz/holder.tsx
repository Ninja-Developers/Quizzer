import {
    Grid,
    Typography
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
                    <Typography>
                        {props.question}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Holder;