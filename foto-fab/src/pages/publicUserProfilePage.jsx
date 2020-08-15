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
import Spinner from "../components/Spinner";

class PublicUserProfilePage extends Component {
  state = {
    page_no: 1,
    publicUser: this.props.match.params.username,
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

  render() {
    const { publicUser } = this.props;
    return (
      <>
        {!publicUser ? (
          <Spinner />
        ) : (
          <UserProfile
            user={publicUser}
            showModal={this.showModal}
            show={this.state.show}
            hideModal={this.hideModal}
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
