import React, { Component } from "react";

export class ViewProfile extends Component {
  render() {
    return (
      <div>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/4a3704d4-7f1b-4172-875c-66c6e716e947-profile_image-300x300.png"
          alt=""
          height="60px"
          width="60px"
          style={{ borderRadius: "50%", marginRight: "20px" }}
        />
      </div>
    );
  }
}

export default ViewProfile;
