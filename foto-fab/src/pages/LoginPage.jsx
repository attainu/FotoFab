import React, { Component } from "react";
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
        <Link to="/signUp">not a member yet? Sign up!</Link>
      </div>
    );
  }
}

export default LoginPage;
