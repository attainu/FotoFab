import React, { Component } from "react";
import "./styles/viewProfile.scss";
export class ViewProfile extends Component {
  render() {
    return (
      <div className="profile">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/4a3704d4-7f1b-4172-875c-66c6e716e947-profile_image-300x300.png"
          alt=""
        />
      </div>
    );
  }
}

export default ViewProfile;
