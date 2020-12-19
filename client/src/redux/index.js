import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

const store = createStore(combineReducers({

}), applyMiddleware(thunk));

export default store;
