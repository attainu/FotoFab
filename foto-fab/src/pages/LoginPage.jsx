import React, { Component } from "react";
import LoginAnimation from "../components/LoginAnimation";
import LoginForm from "../components/LoginForm";
import "./styles/loginPage.scss";
import LoginPhoto from "../components/LoginPhoto";
class LoginPage extends Component {
  componentDidMount() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("mobile-nav").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("navbar").style.display = "flex";
  }
  render() {
    return (
      <div className="login-page">
        {/* <LoginAnimation /> */}
        <LoginPhoto />
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
