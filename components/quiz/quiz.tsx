
import {
    Container,
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core'

import {
    purple
} from '@material-ui/core/colors'

import Holder from './holder'

const useStyle = makeStyles(theme => ({
    logo: {
        color: purple[600]
    },
    quiz: {
        marginTop: theme.spacing(14)
    }
}))

const Quiz = () => {

    const classes = useStyle();

    return (
        <div>
            <Typography variant="h3" className={classes.logo} >
                Quizzer
            </Typography>

            <Container>
                <div className={classes.quiz}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Holder question="sdsdsd" options={['']} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Quiz;