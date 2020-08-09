import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPublicUser,
  fetchPublicUserPhotos,
} from "../redux/actions/publicProfileAction";
import "./styles/publicUser.scss";
import "font-awesome/css/font-awesome.min.css";
import PublicUserPhotos from "../components/publicUserPhotos";

class publicUserProfilePage extends Component {
  componentDidMount() {
    let username = this.props.match.params.username;
    this.props.fetchPublicUser(username);
    this.props.fetchPublicUserPhotos(username);
  }
  render() {
    const { publicUser } = this.props;
    return !publicUser ? (
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
              <h1>
                <button className="message">Message</button>
              </h1>
            </div>
            <div className="location-portfolio-bio">
              <nav className="links">
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

                <a
                  href={publicUser.portfolio_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <i className="fa fa-globe"></i> {publicUser.portfolio_url}
                  </div>
                </a>
              </nav>

              <p>{publicUser.bio}</p>
              {/* <p>Interests if any</p> */}
            </div>
          </div>
        </div>

        <div className="photos-likes-collections">
          <div className="photos">
            <p>
              <i className="fa fa-image"></i> Photos {publicUser.total_photos}
            </p>
          </div>
          <div className="likes">
            <p>
              <i className="fa fa-heart"></i> Likes {publicUser.total_likes}
            </p>
          </div>
          <div className="collection">
            <p>
              <i className="fa fa-object-group"></i>Collections{" "}
              {publicUser.total_collections}
            </p>
          </div>
        </div>
        <hr />

        <PublicUserPhotos />
      </div>
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
})(publicUserProfilePage);
