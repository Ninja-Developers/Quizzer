import React from 'react';

const Form = props => {

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

export default Form;