import Axios from 'axios';

//importing constants 
import {
    AUTH
} from '../constants';

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
            url: ''
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