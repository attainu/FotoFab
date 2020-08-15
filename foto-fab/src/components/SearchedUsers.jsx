import React, { Component } from "react";
import { searchUser, emptyUsers } from "../redux/actions/searchPhotosAction";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import SearchedUserProfile from "./SearchedUserProfile";
import "./styles/searchedUser.scss";

class SearchedUsers extends Component {
  state = {
    page_no: 1,
    searchQuery: "",
  };
  componentDidMount() {
    this.props.emptyUsers();
    this.props.searchUser(
      this.state.page_no,
      this.props.match.params.searchQuery
    );
    this.setState({ searchQuery: this.props.match.params.searchQuery });
  }
  componentDidUpdate(prevProp, prevState) {
    if (this.props.match.params.searchQuery !== this.state.searchQuery) {
      this.props.emptyUsers();
      this.props.searchUser(
        this.state.page_no,
        this.props.match.params.searchQuery
      );
      this.setState({ searchQuery: this.props.match.params.searchQuery });
    } else {
      console.log("not updating users....");
    }
    console.log("prevProps", prevProp);
    console.log("prevState", prevState);
  }
  render() {
    const { users } = this.props;
    console.log(users);
    console.log(this.props);
    return !this.props.users ? (
      <Spinner />
    ) : (
      <div className="searched-users-container">
        <h1>{this.props.searchQuery}</h1>
        {this.props.users === null ? (
          <h1>No user found</h1>
        ) : (
          <div className="searched-user">
            {this.props.users.map((user) => (
              <SearchedUserProfile key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.searchPhotoState.users,
  };
};

export default connect(mapStateToProps, { searchUser, emptyUsers })(
  SearchedUsers
);
