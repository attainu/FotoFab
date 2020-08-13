import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./styles/LoginForm.scss";
class LoginForm extends Component {
  render() {
    return <div className="login-form" id="signIn"></div>;
  }
}

export default LoginForm;
