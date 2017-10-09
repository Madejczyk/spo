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
            email: '',
            checkedField: []
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
        if (error != "" || this.state.checkedField.length < 5) {
            let fieldArray = ["firstName", "lastName", "username", "password", "email"]
            let copy = Object.assign([], this.state.checkedField)

            for (let i=0; i<fieldArray.length; i++){
                if (! copy.includes(fieldArray[i]))
                {
                    copy.push(fieldArray[i])
                    this.setState({
                        checkedField: copy
                    })
                }
            }
            /*fieldArray.forEach(function(element){
                if (! copy.includes(element))
                {
                    copy.push(element)
                    this.setState({
                        checkedField: copy
                    })
                }
            })*/
            event.preventDefault()
            alert(error)
        }
        else{
            alert(JSON.stringify(this.state))
            this.state.firstName = ""
            this.state.lastName = ""
            this.state.username = ""
            this.state.password = ""
            this.state.email = ""
            event.preventDefault()
        }
    }

    onValueChange(value, attr) {
        if (this.state.checkedField.includes(attr)){
            this.setState({
                [attr]:value
            })
        }
        else{
            let copy = Object.assign([], this.state.checkedField)
            copy.push(attr)
            this.setState({
                [attr] : value,
                checkedField : copy
            })
        }

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
            <div id="loginForm">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="headerLoginForm">
                        Create Your Free Account
                    </div>

                    <div className="contentLoginForm">
                        <div className="loginField">
                            First Name<br/>
                            <input
                                className={this.state.firstName == "" && this.state.checkedField.includes("firstName") ?
                                    ("textBoxFieldRequired") : ("textBoxField")}
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleChange.bind(this)}
                            />
                            {this.state.firstName == "" && this.state.checkedField.includes("firstName") ?
                                (<div className="required">This field is required</div> ) : (<div></div>)}
                        </div>

                        <div className="loginField">
                            Last Name<br/>
                            <input
                                className={this.state.lastName == "" && this.state.checkedField.includes("lastName") ?
                                    ("textBoxFieldRequired") : ("textBoxField")}
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleChange.bind(this)}
                            />
                            {this.state.lastName == "" && this.state.checkedField.includes("lastName") ?
                                (<div className="required">This field is required</div> ) : (<div></div>)}
                        </div>

                        <div className="loginField">
                            Username<br/>
                            <input
                                className={this.state.username == "" && this.state.checkedField.includes("username") ?
                                    ("textBoxFieldRequired") : ("textBoxField")}
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange.bind(this)}
                            />
                            {this.state.username == "" && this.state.checkedField.includes("username") ?
                                (<div className="required">This field is required</div> ) : (<div></div>)}
                        </div>

                        <div className="loginField">
                            Password<br/>
                            <input
                                className={this.state.password == "" && this.state.checkedField.includes("password") ?
                                    ("textBoxFieldRequired") : ("textBoxField")}
                                name="password"
                                type="text"
                                value={this.state.password}
                                onChange={this.handleChange.bind(this)}
                            />
                            {this.state.password == "" && this.state.checkedField.includes("password") ? (
                                <div className="required">This field is required</div>
                            ) : (
                                <div className="belowField">At least 8 characters</div>
                            )}
                        </div>

                        <div className="loginField">
                            Email<br/>
                            <input
                                className={this.state.email == "" && this.state.checkedField.includes("email") ?
                                    ("textBoxFieldRequired") : ("textBoxField")}
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                            />
                            {this.state.email == "" && this.state.checkedField.includes("email") ? (
                                <div className="required">This field is required</div>
                            ) : (
                                <div className="belowField">An activation link will be sent to this mail</div>
                            )}
                        </div>
                        <div className="footerLoginForm">
                            By clicking Submit, I agree that I have read and accepted the <br/><a>Terms and Conditions</a>.
                        </div>
                        <input id="loginSubmit"
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
