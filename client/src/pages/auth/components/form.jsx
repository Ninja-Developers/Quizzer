import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    const {
        type
    } = props

    if (type === "login") {
        return (
            <div>
                <div className="row flex-center">
                    <div class="col sm-6">
                        <div class="form-group">
                            <input class="input-block" type="text" id="username" placeholder="username" />
                        </div>
                        <div class="form-group">
                            <input class="input-block" type="text" id="username" placeholder="Password" />
                        </div>

                    </div>

                </div>

                <div className="row flex-center">
                    <button>Login</button>
                </div>
            </div>
        )
    }

    if(type === "signup"){
        return (
            <div>
                
            </div>
        )
    }

}

Form.propTypes = {
    type: PropTypes.oneOf(['login', 'signup']).isRequired
}


export default Form;

