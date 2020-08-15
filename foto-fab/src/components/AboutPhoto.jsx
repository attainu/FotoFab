import React, { Component } from "react";
import image from "../image/pic3.jpg";
import "./styles/AboutPhoto.scss";
import arrow from "../image/arrow.png";
import { Link } from "react-router-dom";
import logo from "../logo/whiteLogo.svg";
import { Spring } from "react-spring/renderprops";

class AboutPhoto extends Component {
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
                    <Link
                      to="/"
                      className="brand-name"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "20px",
                        marginTop: "20px",
                      }}
                    >
                      <img src={logo} alt="" height="70px" />
                    </Link>
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

                        <Spring
                          from={{ opacity: 1, marginTop: -500 }}
                          to={{ opacity: 1, marginTop: 0 }}
                          config={{ delay: 1500 }}
                        >
                          {(props) => (
                            <div className="down-arrow" style={props}>
                              <div>
                                <span>Join</span>
                              </div>
                              <a className="circle" href="#signIn">
                                <img src={arrow} alt="down arrow" />
                              </a>
                            </div>
                          )}
                        </Spring>
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

export default AboutPhoto;
