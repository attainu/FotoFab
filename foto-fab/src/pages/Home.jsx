import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import { connect } from "react-redux";
import { fetchPopularPhotos } from "../redux/actions/fetchPhotosAction";
import PhotoCard from "../components/photoCard";
import "../../src/components/styles/photoCard.scss";
class Home extends Component {
  componentDidMount() {
    this.props.fetchPopularPhotos();
  }
  render() {
    const { photos } = this.props;
    return photos == null ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <Searchbar />
        <div className="photo-container">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.photoState.photos);
  return {
    photos: state.photoState.photos,
  };
};

export default connect(mapStateToProps, { fetchPopularPhotos })(Home);
