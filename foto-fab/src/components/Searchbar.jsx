import React, { Component } from "react";
import "./styles/searchBar.scss";
import "font-awesome/css/font-awesome.min.css";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  state = {
    searchQuery: "",
    username: "Shivam Yadav",
  };
  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.searchQuery}`);
  };
  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar-area">
          <div className="about-foto-fab">
            <h1>Foto-Fab</h1>
            <p>The internet's source of freely-usable images.</p>
            <p>Powered by creator everywhere</p>
          </div>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search free high-resolution photos"
              onChange={this.handleChange}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="picture-info">
          <div className="photographer">
            <p>
              <strong>Photo of the day</strong> by{" "}
              <strong>{this.state.username}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
