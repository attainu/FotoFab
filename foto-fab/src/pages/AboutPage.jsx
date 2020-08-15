import React, { Component } from "react";
import MobileNavigation from "../components/mobileNavigation";
import AboutPhoto from "../components/AboutPhoto";
import "./styles/aboutPage.scss";
class AboutPage extends Component {
  render() {
    return (
      <>
        <div className="about-page">
          <AboutPhoto />
        </div>
        <MobileNavigation />
      </>
    );
  }
}

export default AboutPage;
