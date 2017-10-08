import React, { Component } from 'react'
//import PropTypes from 'prop-types'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: ''
        }
    }

    componentDidMount() {
       //Nothing
    }

    handleChange(event){
        this.onValueChange(event.target.value, event.target.name)
    }

    handleSubmit(event){
        const error = this.getErrorMessage()
        if (error != "") {
            alert(error)
        }
        else{
            alert(JSON.stringify(this.state))
            this.state.firstName = ""
        }

        event.preventDefault();
    }

    onValueChange(value, attr) {
        this.setState({
            [attr]:value
        })
    }

    getErrorMessage()
    {
        let err = "";
        const onlyLettersReg = /^[a-z\d]+$/
        if (! onlyLettersReg.test(this.state.firstName))
            err = `First Name must contains only letters.\n`

        if (! onlyLettersReg.test(this.state.lastName))
            err += `Last Name must contains only letters.\n`

        const reg = /[a-z](\d?|_?|\.?)+$/
        if (! reg.test(this.state.username))
            err += `Username must contains only lower letters. May contains numbers, ".", "_".\n`

        if (this.state.password.length < 8)
            err += `Password must be at least 8 characters, but is only ${this.state.password.length}.\n`


        if (! this.validMail(this.state.email))
            err += `Invalid email.\n`
        return err
    }


    validMail(email)
    {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }

    render() {
        return (
            <div>
                <div className="headerLoginForm">
                    Create Your Free Account
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <div>First Name</div>
                        <input
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleChange.bind(this)}
                        />
                        {this.state.firstName == "" ? (<div className="required">This field is required</div> ) : (<div></div>)}
                    </div>

                    <div>
                        <div>Last Name</div>
                        <input
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange.bind(this)}
                        />
                        {this.state.lastName == "" ? (<div className="required">This field is required</div> ) : (<div></div>)}
                    </div>

                    <div>
                        <div>Username</div>
                        <input
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange.bind(this)}
                        />
                        {this.state.username == "" ? (<div className="required">This field is required</div> ) : (<div></div>)}
                    </div>

                    <div>
                        <div>Password</div>
                        <input
                            name="password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                        />
                        {this.state.password == "" ? (
                            <div className="required">This field is required</div>
                        ) : (
                            <div className="belowField">At least 8 characters</div>
                        )}
                    </div>

                    <div>
                        <div>Email</div>
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                        />
                        {this.state.email == "" ? (
                            <div className="required">This field is required</div>
                        ) : (
                            <div className="belowField">An activation link will be sent to this mail</div>
                        )}
                    </div>

                    <div className="footerLoginForm">
                        By clicking Submit, I agree that I have read and accepted the <a>Terms and Conditions</a>
                        <input
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

//Proptypes

export default Login
