import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

// importing reducers 
import user from './reducers/user';

const store = createStore(combineReducers({
    user
}), applyMiddleware(thunk));

export default store;
