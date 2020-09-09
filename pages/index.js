import Navbar from '../components/navbar'

import {
    Container,
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(12)
    },
    title: {
        marginTop: theme.spacing(20)
    }
}))

const Index = ({ quizzes }) => {
    const classes = useStyles()

    return <div>
        <Navbar />
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src="/images/questions.svg" alt="landing image" width="100%" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" align="center" className={classes.title} >
                            Quizzer
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
            {console.log(quizzes)}
        </div>
    </div>
}

export async function getStaticProps(context) {

    const { getAllQuizzes } = require('../lib/airtable/quiz')

    const data = await getAllQuizzes()

    data.forEach(el => {
        console.log(JSON.parse(el.Questions))
    })

    return {
        props: {
            quizzes: "name"
        }
    }
}

export default Index