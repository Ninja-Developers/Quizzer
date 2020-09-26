import { Quiz } from '../reducers/quiz'
import {
    CREATE_NEW_QUIZ
} from '../constants'

const createNewQuiz = (quiz: Quiz) => {
    return {
        type: CREATE_NEW_QUIZ,
        payload: quiz
    }
}


export {
    createNewQuiz
}