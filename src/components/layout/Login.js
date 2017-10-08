import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="header">Create Your Free Account</div>

                <div className="firstName">
                     First Name
                </div>

                <div className="lastName">
                    Last Name
                </div>

                <div className="username">
                    Username
                </div>

                <div className="password">
                    Password
                </div>

                <div className="email">
                    Email
                </div>

                <div className="info">
                    By clicking Submit, I agree that I have read and accepted the Terms and Conditions.
                </div>

                <button>Submit</button>
            </div>
        )
    }
}

export default Login
