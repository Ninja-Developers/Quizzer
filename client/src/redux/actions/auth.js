import Axios from 'axios';


const login = user => {
    return {
        type: '',
        payload: user
    }
}

const loginAsync = () => {
    return dispath => {
        Axios({
            method: 'POST',
            url: '',

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