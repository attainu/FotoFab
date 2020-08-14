import React, { Component } from "react";
import buildingImage from "../image/building.jpg";
import shutter from "../image/shutter.png";
import signUpGirl from "../image/signUpGirl.png";
import "./styles/signUp.scss";

class SignUpPage extends Component {
  componentDidMount() {
    document.getElementById("navbar").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("navbar").style.display = "flex";
  }
  render() {
    return (
      <div className="signUp">
        <div
          className="building-background-container"
          style={{ backgroundImage: `url(${buildingImage})` }}
        >
          <div className="signUp-container">
            <div className="shutter-container">
              <img src={shutter} alt="" />
            </div>
            <div className="signUp-girl">
              <img src={signUpGirl} alt="" />
            </div>
            <div className="singUp-form">
              <form className="form">
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
