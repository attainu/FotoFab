import React, { Component } from "react";
import image from "../image/pic3.jpg";
import "./styles/loginPhoto.scss";

import { Spring } from "react-spring/renderprops";

class LoginPhoto extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 1, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {(props) => (
          <div style={props}>
            <div className="login-photo">
              <div
                className="login-photo-container"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="info">
                  <div className="logo-area">
                    <h1>Logo</h1>
                  </div>
                  <Spring
                    from={{ opacity: 0, marginLeft: -500 }}
                    to={{ opacity: 1, marginLeft: 0 }}
                    config={{ delay: 1000 }}
                  >
                    {(props) => (
                      <div style={props} className="info-para">
                        <div>
                          <h1>Creation Starts Here</h1>
                          <p>Access free, high resolution photos</p>
                          <p> Get inspired, Give inspiration</p>
                        </div>
                      </div>
                    )}
                  </Spring>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default LoginPhoto;
