import {
    AUTH
} from '../constants';

const initialState = {
    isLoggedIn: false,
    username: '',
    token: ''
}

export default (state = initialState, action) => {
    switch (action.types) {
        case AUTH:
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                isLoggedIn: !state.isLoggedIn
            }
        default:
            return state
    }
}