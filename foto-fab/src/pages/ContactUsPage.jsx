import React, { Component } from "react";
import MobileNavigation from "../components/mobileNavigation";
import ContactUsAnimation from "../components/ContactUsAnimation";

class ContactUs extends Component {
  render() {
    return (
      <>
        <ContactUsAnimation />
        <MobileNavigation />
      </>
    );
  }
}

export default ContactUs;
