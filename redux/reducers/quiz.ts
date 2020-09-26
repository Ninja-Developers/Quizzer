// importing constants 
import {
    CREATE_NEW_QUIZ
} from '../constants'

export interface Quiz{
    question: string,
    options: Array<string>
    answer: number
}

interface InitState{
    name: string,
    quizzes: Array<Quiz>
}

const initialState: InitState = {
    name: '',
    quizzes: [{
        question: '',
        options: ['',''],
        answer: 0
    }]
}

export default (state = initialState, action: any) => {
    switch(action.type){

        case CREATE_NEW_QUIZ:
            return {
                ...state,
                quizzes: [...state.quizzes, action.payload]
            }

        default:
            return state
    }
}