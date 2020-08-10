import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoCard from "./photoCard";

class PublicUserLikes extends Component {
  render() {
    const { likedPhotos } = this.props;
    return !likedPhotos ? null : (
      <div className="photo-container">
        {likedPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likedPhotos: state.publicUserState.likedPhotos,
  };
};
export default connect(mapStateToProps, null)(PublicUserLikes);
