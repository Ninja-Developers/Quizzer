import React from 'react';
import Form from './components/form';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

const Login = props => {

    return (
        <div className="container">
            <div className="paper margin-top-large">
                <center>
                    <h3>Login</h3>
                </center>
                <Form type="login" authController={props.login} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispath => {
    return {
        login: (username, password) => { dispath(login(username, password)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);