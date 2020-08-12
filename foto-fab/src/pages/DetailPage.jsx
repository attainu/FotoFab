import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailPhotos } from "../redux/actions/detailPhoto";
import Spinner from "../components/Spinner";
import MobileNavigation from "../components/mobileNavigation";
import axios from "axios";
import Collection from "../components/Collection";
import { withRouter } from "react-router-dom";
import "./styles/detailPage.scss";

class DetailPage extends Component {
  handleSearch = (event) => {
    console.log(event.target.innerText);
    this.props.history.push(`/search/${event.target.innerText}`);
  };

  handleProfile = () => {
    this.props.history.push(`/public/${this.props.photo.user.username}`);
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchDetailPhotos(this.props.match.params.id);
  }

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
      <>
        {!photo ? (
          <Spinner />
        ) : (
          <div className="detail-page">
            <div className="detail-page-section">
              <div className="header">
                <div className="user-info">
                  <div className="profile-pic" onClick={this.handleProfile}>
                    <img src={`${photo.user.profile_image.large}`} alt="" />
                  </div>
                  <div className="name-location">
                    <p className="name" onClick={this.handleProfile}>
                      {photo.user.name}
                    </p>
                    <p className="location">
                      {!photo.location ? null : photo.location.name}
                    </p>
                  </div>
                </div>
                <div className="download">
                  <button onClick={this.handleDownload}>Download Image</button>
                </div>
              </div>
              <div className="photo-section">
                <img
                  src={`${photo.urls.regular}`}
                  alt={photo.alt_description}
                />
              </div>
              <div className="tags">
                {photo.tags.map((tag) => (
                  <button onClick={this.handleSearch} key={tag.title}>
                    {tag.title}
                  </button>
                ))}
              </div>
              <div className="description">
                {!photo.description ? null : <p>{photo.description}</p>}
              </div>
              <div className="capture-info">
                {!photo.exif ? null : (
                  <>
                    <p className="line"></p>
                    <p>
                      <span>Aperture: </span>
                      {!photo.exif.aperture ? null : photo.exif.aperture}
                    </p>
                    <p>
                      <span>Exposure Time: </span>
                      {!photo.exif.exposure_time
                        ? null
                        : photo.exif.exposure_time}
                    </p>
                    <p>
                      <span>Focal Length: </span>
                      {!photo.exif.focal_length
                        ? null
                        : photo.exif.focal_length}
                    </p>
                    <p>
                      <span>ISO: </span>
                      {!photo.exif.iso ? null : photo.exif.iso}
                    </p>
                    <p>
                      <span>Model: </span>
                      {!photo.exif.model ? null : photo.exif.model}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="similar-collection">
              <p>Related Collections</p>
              <div className="collection-body">
                {!photo.related_collections
                  ? null
                  : photo.related_collections.results.map((collection) => (
                      <Collection key={collection.id} collection={collection} />
                    ))}
              </div>
            </div>
          </div>
        )}
        <MobileNavigation />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.detailPhoto.photo,
  };
};

export default connect(mapStateToProps, { fetchDetailPhotos })(
  withRouter(DetailPage)
);
