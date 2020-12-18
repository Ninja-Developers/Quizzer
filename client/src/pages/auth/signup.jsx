import React from 'react';
import Form from './components/form';

const Signup = props => {

    return (
        <div className="container">
            <div className="paper margin-top-large">
                <center>
                    <h3>Signup</h3>
                </center>
                <Form type="signup" />
            </div>

        </div>
    )
}

export default Signup;