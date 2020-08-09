import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import { withRouter } from "react-router-dom";
class PhotoCard extends Component {
  handleProfile = () => {
    this.props.history.push(`/public/${this.props.photo.user.username}`);
  };

  render() {
    const { photo } = this.props;
    return (
      <div className="photo-card">
        <img src={`${photo.urls.small}`} alt="" />
        <div className="overlay">
          <div className="like-add">
            <button>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </button>
            <button>
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div className="photographer-download">
            <div className="user-info" onClick={this.handleProfile}>
              <div className="profile-image">
                <img src={`${photo.user.profile_image.medium}`} alt="" />
              </div>
              <p>{photo.user.name}</p>
            </div>

            <button>
              <i className="fa fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoCard);
