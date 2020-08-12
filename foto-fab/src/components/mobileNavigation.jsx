import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./styles/mobileNav.scss";
import { Link, NavLink } from "react-router-dom";
import ViewProfile from "./ViewProfile";
export class MobileNavigation extends Component {
  state = {
    isLoggedIn: false,
  };
  handleClick = () => {
    console.log("clicked");
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="mobile-navbar" id="mobile-nav">
        <Link className="home" to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
        <div className="submit-photo" onClick={this.handleClick}>
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
        </div>
        {!isLoggedIn ? (
          <NavLink
            to="/login"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <button>Login</button>
          </NavLink>
        ) : (
          <ViewProfile />
        )}
      </div>
    );
  }
}

export default MobileNavigation;
