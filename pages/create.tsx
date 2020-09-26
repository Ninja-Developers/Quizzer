// importing modules 
import QuizHolder from '../components/questions/quiz.holder'
import { connect } from 'react-redux'
import {Quiz} from '../redux/reducers/quiz'

const Create = props => {

    return <>
        {props.quizzes.map((quiz: Quiz) => <QuizHolder question={quiz.question} options={quiz.options} answer={quiz.answer} />)}
    </>
}

const mapStateToProps = state => {
    return {
        quizzes: state.quiz.quizzes
    }
}

export default connect(mapStateToProps)(Create)