import Axios from 'axios';

//importing constants 
import {
    AUTH
} from '../constants';

// importing urls 
import {
    LOGIN_URL
} from '../url';

const login = user => {
    return {
        type: AUTH,
        payload: user
    }
}

const loginAsync = (username, password) => {
    return dispath => {
        Axios({
            method: 'POST',
            url: '',
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            dispath(login(res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}

const signupAsync = () => {
    return dispath => {
        Axios({
            method: 'POST',
            url: LOGIN_URL
        }).then(res => {
            dispath(login(res.data));
        }).catch(err => {
            console.log(err)
        })
    }
}

export {
    loginAsync as login,
    signupAsync as signup
}