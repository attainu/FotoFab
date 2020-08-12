import React, { Component } from "react";
import "./styles/LoginForm.scss";
class LoginForm extends Component {
  render() {
    return (
      <div className="login-form" id="signIn">
        <form>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
