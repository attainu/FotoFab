import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPublicUser,
  fetchPublicUserPhotos,
  fetchPublicUserLikedPhotos,
  fetchPublicUserCollections,
} from "../redux/actions/publicProfileAction";
import "./styles/publicUser.scss";
import MobileNavigation from "../components/mobileNavigation";
import { emptyImages } from "../redux/actions/searchPhotosAction";
import { fetchLocation } from "../redux/actions/fetchCoordinates";
import UserProfile from "../components/UserProfile";

class PublicUserProfilePage extends Component {
  state = {
    page_no: 1,
    showLikes: false,
    showCollection: false,
    publicUser: this.props.match.params.username,
    activePhoto: "active",
    activeLikes: "",
    activeCollection: "",
    show: false,
    lat: "",
    lng: "",
  };

  componentDidMount() {
    this.props.emptyImages();
    let username = this.props.match.params.username;
    this.setState({ publicUser: username });
    this.props.fetchPublicUser(username);
    this.props.fetchPublicUserPhotos(username, this.state.page_no);
    this.props.fetchPublicUserLikedPhotos(username, this.state.page_no);
    this.props.fetchPublicUserCollections(username);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.match.params.username);
    console.log(this.props.match.params.username);
    if (
      prevProps.match.params.username !== this.props.match.params.username ||
      prevState.page_no < this.state.page_no
    ) {
      this.props.fetchPublicUser(this.props.match.params.username);
      this.props.fetchPublicUserPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
      this.props.fetchPublicUserLikedPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
      this.props.fetchPublicUserCollections(this.props.match.params.username);
    } else {
      console.log("not updating");
    }
  }

  showModal = () => {
    this.props.fetchLocation(this.props.publicUser.location);
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
    });
  };
  render() {
    //console.log(this.state);
    const { publicUser, location } = this.props;
    const { showLikes, showCollection } = this.state;
    return (
      <>
        {!publicUser ? (
          <h1>Loading...</h1>
        ) : (
          <UserProfile
            user={publicUser}
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

const mapStateToProps = (state) => {
  return {
    publicUser: state.publicUserState.publicUser,
    location: state.locationState.location,
  };
};
export default connect(mapStateToProps, {
  fetchPublicUser,
  fetchPublicUserPhotos,
  fetchPublicUserLikedPhotos,
  fetchPublicUserCollections,
  fetchLocation,
  emptyImages,
})(PublicUserProfilePage);
