import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles/navbar.scss";
import ViewProfile from "./ViewProfile";
class Navbar extends Component {
  state = {
    isToggled: false,
    isLoggedIn: false,
  };

  handleToggle = () => {
    console.log("clicked");
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    const { isToggled, isLoggedIn } = this.state;
    let activeClass = "";
    if (isToggled) activeClass = "active";

    return (
      <nav className="navbar">
        <div className="primary-components">
          <div className="brand-title">
            <Link
              to="/"
              className="brand-name"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Brand Name
            </Link>
          </div>
          <div className="toggle-button" onClick={this.handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className={`navbar-links ${activeClass}`}>
          <ul>
            <li>
              <NavLink
                className="main-nav"
                activeClassName="main-nav-active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="main-nav"
                activeClassName="main-nav-active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <button className="button">Submit a photo</button>
            </li>
            <li>
              {isLoggedIn ? (
                <Link to="/profile">
                  <ViewProfile />
                </Link>
              ) : (
                <NavLink
                  to="/login"
                  className="main-nav"
                  activeClassName="main-nav-active"
                >
                  <button className="login-button">Login</button>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

//TODO: background: photo of the day
