import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
// import Collection from "./Collection";
import UserLikes from "./UserLikes";
import PublicUserPhotos from "../publicUserPhotos";
import PublicUserCollection from "../PublicUserCollection";
import Modal from "../Modal";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import UserPhoto from "./UserPhoto";

class CurrentUserProfile extends Component {
  handleEdit = () => {
    console.log("edit");
    this.props.history.push(`/editProfile`);
  };
  render() {
    const {
      user,
      showLikes,
      showCollection,
      location,
      show,
      activeCollection,
      activeLikes,
      activePhoto,
      hideModal,
      showModal,
      handleCollection,
      handleLikedPhotos,
      handlePhotos,
    } = this.props;
    return (
      <div className="profile-container">
        <div className="all-bio">
          <div className="profile-pic">
            <img src={user.profile_image.large} alt="" />
          </div>
          <div className="name-data">
            <div className="name-and-follow-button">
              <h1>{user.name}</h1>
              {/* <h1>
                <button className="follow">
                  <i className="fa fa-user-plus"></i>Follow
                </button>
              </h1> */}
              <h1>
                <button onClick={this.handleEdit} className="edit">
                  Edit Profile
                </button>
              </h1>
              {/* <h1>
                    <button className="message">Message</button>
                  </h1> */}
            </div>
            <div className="location-portfolio-bio">
              <nav className="links">
                {!user.location ? null : (
                  <>
                    <div className="location" onClick={showModal}>
                      <i className="fa fa-location-arrow"></i>
                      {user.location}
                    </div>
                    {!this.props.location ? null : (
                      <Modal show={show} handleClose={hideModal}>
                        <p>Map</p>
                        <p>{this.props.location.lat}</p>
                        <p>{this.props.location.lng}</p>
                      </Modal>
                    )}
                  </>
                )}
                {!user.portfolio_url ? null : (
                  <a
                    href={user.portfolio_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <i className="fa fa-globe"></i> {user.portfolio_url}
                    </div>
                  </a>
                )}
              </nav>

              <p>{user.bio}</p>
              {/* <p>Interests if any</p> */}
            </div>
          </div>
        </div>
        <div className="photos-likes-collections">
          <div className="photos" onClick={handlePhotos}>
            <p className={activePhoto}>
              <i className="fa fa-image"></i> Photos {user.total_photos}
            </p>
          </div>
          <div className="likes" onClick={handleLikedPhotos}>
            <p className={activeLikes}>
              <i className="fa fa-heart"></i> Likes {this.props.likes.length}
            </p>
          </div>
          <div className="collection" onClick={handleCollection}>
            <p className={activeCollection}>
              <i className="fa fa-object-group"></i>Collections{" "}
              {user.total_collections}
            </p>
          </div>
        </div>
        <hr />
        {!showLikes && !showCollection ? (
          <PublicUserPhotos />
        ) : showLikes ? (
          <UserLikes />
        ) : (
          <PublicUserCollection />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.currentUserState.localLikes,
  };
};

export default connect(mapStateToProps, null)(withRouter(CurrentUserProfile));
