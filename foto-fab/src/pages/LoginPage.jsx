import React, { Component } from "react";
import LoginAnimation from "../components/LoginAnimation";
import LoginForm from "../components/LoginForm";
import "./styles/loginPage.scss";
import LoginPhoto from "../components/LoginPhoto";
import { Link } from "react-router-dom";
class LoginPage extends Component {
  componentDidMount() {
    document.getElementById("navbar").style.display = "none";
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
        <Link to="/signUp">not a member yet? Sign up!</Link>
      </div>
    );
  }
}

export default LoginPage;
