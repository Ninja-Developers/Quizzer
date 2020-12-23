import React from 'react';
import Form from './components/form';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/auth';

const Signup = props => {

    return (
        <div className="container">
            <div className="paper margin-top-large">
                <center>
                    <h3>Signup</h3>
                </center>
                <Form type="signup" authController={props.signup} />
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (username, password) => { dispatch(signup(username, password)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);