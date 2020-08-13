import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPublicUser,
  fetchPublicUserPhotos,
  fetchPublicUserLikedPhotos,
  fetchPublicUserCollections,
} from "../redux/actions/publicProfileAction";

import { emptyImages } from "../redux/actions/fetchPhotosAction";
import "./styles/publicUser.scss";
import "font-awesome/css/font-awesome.min.css";
import PublicUserPhotos from "../components/publicUserPhotos";
import PublicUserLikes from "../components/PublicUserLikes";
import PublicUserCollection from "../components/PublicUserCollection";
import MobileNavigation from "../components/mobileNavigation";

class PublicUserProfilePage extends Component {
  state = {
    page_no: 1,
    showLikes: false,
    showCollection: false,
    publicUser: this.props.match.params.username,
    activePhoto: "active",
    activeLikes: "",
    activeCollection: "",
  };

  handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log("bottom reached");
      this.setState({ ...this.state, page_no: this.state.page_no + 1 });
    } else {
      console.log("bottom not reached");
    }
  };

  componentDidMount() {
    let username = this.props.match.params.username;
    this.setState({ publicUser: username });
    this.props.fetchPublicUser(username);
    this.props.fetchPublicUserPhotos(username, this.state.page_no);
    this.props.fetchPublicUserLikedPhotos(username, this.state.page_no);
    this.props.fetchPublicUserCollections(username);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.match.params.username);
    console.log(this.props.match.params.username);
    if (prevState.page_no < this.state.page_no) {
      this.props.fetchPublicUser(this.props.match.params.username);
      this.props.fetchPublicUserPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
    } else {
      console.log("not updating");
    }

    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.props.emptyImages();
      this.props.fetchPublicUserPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
      this.props.fetchPublicUserLikedPhotos(
        this.props.match.params.username,
        this.state.page_no
      );
      this.props.fetchPublicUserCollections(this.props.match.params.username);
    }
  }

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
    const { publicUser } = this.props;
    const { showLikes, showCollection } = this.state;
    return (
      <>
        {!publicUser ? (
          <h1>Loading...</h1>
        ) : (
          <div className="profile-container">
            <div className="all-bio">
              <div className="profile-pic">
                <img src={publicUser.profile_image.large} alt="" />
              </div>
              <div className="name-data">
                <div className="name-and-follow-button">
                  <h1>{publicUser.name}</h1>
                  <h1>
                    <button className="follow">
                      <i className="fa fa-user-plus"></i>Follow
                    </button>
                  </h1>
                  {/* <h1>
                    <button className="message">Message</button>
                  </h1> */}
                </div>
                <div className="location-portfolio-bio">
                  <nav className="links">
                    {!publicUser.location ? null : (
                      <a
                        href={publicUser.location}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>
                          <i className="fa fa-location-arrow"></i>{" "}
                          {publicUser.location}
                        </div>
                      </a>
                    )}
                    {!publicUser.portfolio_url ? null : (
                      <a
                        href={publicUser.portfolio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>
                          <i className="fa fa-globe"></i>{" "}
                          {publicUser.portfolio_url}
                        </div>
                      </a>
                    )}
                  </nav>

                  <p>{publicUser.bio}</p>
                  {/* <p>Interests if any</p> */}
                </div>
              </div>
            </div>
            <div className="photos-likes-collections">
              <div className="photos" onClick={this.handlePhotos}>
                <p className={this.state.activePhoto}>
                  <i className="fa fa-image"></i> Photos{" "}
                  {publicUser.total_photos}
                </p>
              </div>
              <div className="likes" onClick={this.handleLikedPhotos}>
                <p className={this.state.activeLikes}>
                  <i className="fa fa-heart"></i> Likes {publicUser.total_likes}
                </p>
              </div>
              <div className="collection" onClick={this.handleCollection}>
                <p className={this.state.activeCollection}>
                  <i className="fa fa-object-group"></i>Collections{" "}
                  {publicUser.total_collections}
                </p>
              </div>
            </div>
            <hr />
            {!showLikes && !showCollection ? (
              <PublicUserPhotos />
            ) : showLikes ? (
              <PublicUserLikes />
            ) : (
              <PublicUserCollection />
            )}
          </div>
        )}
        <MobileNavigation />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    publicUser: state.publicUserState.publicUser,
  };
};
export default connect(mapStateToProps, {
  fetchPublicUser,
  fetchPublicUserPhotos,
  fetchPublicUserLikedPhotos,
  fetchPublicUserCollections,
  emptyImages,
})(PublicUserProfilePage);
