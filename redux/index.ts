import {combineReducers,createStore} from 'redux'
import quiz from './reducers/quiz'


const store = createStore(combineReducers({
    quiz
}))

export {store}