import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.scss";

class Navbar extends Component {
  state = {
    isToggled: false,
  };

  handleToggle = () => {
    console.log("clicked");
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    const { isToggled } = this.state;
    let activeClass = "";
    if (isToggled) activeClass = "active";

    return (
      <nav className="navbar">
        <div className="brand-title">Brand Name</div>
        <div className="toggle-button" onClick={this.handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
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
              <button>Submit a photo</button>
            </li>
            <li>
              <NavLink
                to="/login"
                className="main-nav"
                activeClassName="main-nav-active"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

//TODO: background: photo of the day
