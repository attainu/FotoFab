import React, { Component } from "react";
import MobileNavigation from "../components/mobileNavigation";
import AboutPhoto from "../components/AboutPhoto";
import "./styles/aboutPage.scss";
import ab from "../image/ab4.jpg";
class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="about-page">
          <AboutPhoto />
        </div>
        <MobileNavigation />
        <div className="ab">
          <img src={ab} alt="about" className="ab-img"></img>
        </div>
      </div>
    );
  }
}

export default AboutPage;
