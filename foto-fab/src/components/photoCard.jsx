import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class PhotoCard extends Component {
  handleProfile = () => {
    this.props.history.push(`/public/${this.props.photo.user.username}`);
  };

  handleDownload = () => {
    console.log("download");
    console.log(this.props.photo.links.download);
    axios({
      url: this.props.photo.links.download,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${this.props.photo.id}.jpg`);
      document.body.appendChild(link);
      link.click();
    });
  };

  render() {
    const { photo } = this.props;
    console.log(photo);
    return (
      <Link to={`/detailPage/${photo.id}`}>
        <div className="photo-card">
          <img src={`${photo.urls.regular}`} alt="" />
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

              <button onClick={this.handleDownload}>
                <i className="fa fa-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default withRouter(PhotoCard);
