import React, { Component } from "react";
import MobileNavigation from "../components/mobileNavigation";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchLocation } from "../redux/actions/fetchCoordinates";
// import UserProfile from "../components/UserProfile";
import "./styles/publicUser.scss";

// import axios from "axios";
// import { key } from "../config";

import { emptyImages } from "../redux/actions/searchPhotosAction";

import {
  // fetchPublicUser,
  fetchPublicUserPhotos,
  fetchPublicUserLikedPhotos,
  fetchPublicUserCollections,
} from "../redux/actions/publicProfileAction";

import {
  fetchCurrentUserLikedPhotos,
  fetchCurrentUserCollections,
} from "../redux/actions/currentUserAction";

import CurrentUserProfile from "../components/currentUser/Profile";
class ProfilePage extends Component {
  state = {
    page_no: 1,
    showLikes: false,
    showCollection: false,
    stateChanged: false,
    user: this.props.match.params.username,
    activePhoto: "active",
    activeLikes: "",
    activeCollection: "",
    show: false,
    lat: "",
    lng: "",
  };

  // fetchUserLikedPhotos = async (username) => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.unsplash.com/users/${username}/likes/?client_id=${key.ACCESS_KEY}`
  //     );
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  componentDidMount() {
    this.props.emptyImages();
    let username = this.props.match.params.username;
    this.setState({ user: username });
    // this.props.fetchPublicUser(username);
    this.props.fetchPublicUserPhotos(username, this.state.page_no);
    this.props.fetchPublicUserLikedPhotos(username, this.state.page_no);
    this.props.fetchPublicUserCollections(username);
    this.props.fetchCurrentUserLikedPhotos(username, this.state.page_no);
    this.props.fetchCurrentUserCollections(username);

    //checking-----
    // if (this.props.user) {
    //   this.fetchUserLikedPhotos(this.props.user.username);
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.match.params.username);
    console.log(this.props.match.params.username);
    if (
      prevProps.match.params.username !== this.props.match.params.username ||
      prevState.page_no < this.state.page_no ||
      this.state.stateChanged
    ) {
      // this.props.fetchPublicUser(this.props.match.params.username);
      this.props.fetchPublicUserPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
      this.props.fetchPublicUserLikedPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
      this.props.fetchPublicUserCollections(this.props.match.params.username);
      this.props.fetchCurrentUserLikedPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
      this.props.fetchCurrentUserCollections(this.props.match.params.username);
    } else {
      console.log("not updating");
    }
  }

  showModal = () => {
    this.props
      .fetchLocation(this.props.user.location)
      .catch(alert("searching..."));
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handlePhotos = () => {
    console.log("photos");
    this.setState({
      showLikes: false,
      showCollection: false,
      activeLikes: "notActive",
      activeCollection: "notActive",
      activePhoto: "active",
      stateChanged: true,
    });
  };
  handleLikedPhotos = () => {
    console.log("likes");
    this.setState({
      showLikes: true,
      showCollection: false,
      activeLikes: "active",
      activePhoto: "notActive",
      activeCollection: "notActive",
      stateChanged: true,
    });
  };

  handleCollection = () => {
    console.log("collections");
    this.setState({
      showLikes: false,
      showCollection: true,
      activeCollection: "active",
      activePhoto: "notActive",
      activeLikes: "notActive",
      stateChanged: true,
    });
  };
  render() {
    const { user, location } = this.props;
    const { showLikes, showCollection } = this.state;
    return (
      <>
        {!user ? (
          <Redirect to="/" />
        ) : (
          <CurrentUserProfile
            user={user}
            showLikes={showLikes}
            showCollection={showCollection}
            location={location}
            handlePhotos={this.handlePhotos}
            handleLikedPhotos={this.handleLikedPhotos}
            handleCollection={this.handleCollection}
            showModal={this.showModal}
            show={this.state.show}
            hideModal={this.hideModal}
            activePhoto={this.state.activePhoto}
            activeLikes={this.state.activeLikes}
            activeCollection={this.state.activeCollection}
          />
        )}
        <MobileNavigation />
      </>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    accessTokenData: storeState.userState.accessTokenData,
    user: storeState.userState.userProfile,
    location: storeState.locationState.location,
  };
};

export default connect(mapStateToProps, {
  // fetchPublicUser,
  fetchPublicUserPhotos,
  fetchPublicUserLikedPhotos,
  fetchPublicUserCollections,
  fetchLocation,
  emptyImages,
  fetchCurrentUserLikedPhotos,
  fetchCurrentUserCollections,
})(ProfilePage);
