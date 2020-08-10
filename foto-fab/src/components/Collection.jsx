import React, { Component } from "react";

class Collection extends Component {
  render() {
    const { collection } = this.props;
    const { preview_photos } = this.props.collection;
    console.log(preview_photos);
    return (
      <div className="collection">
        {!preview_photos ? null : (
          <div className="collection-grid">
            {preview_photos.length >= 3 ? (
              <>
                <img src={preview_photos[0].urls.thumb} alt="" />
                <img src={preview_photos[1].urls.thumb} alt="" />
                <img src={preview_photos[2].urls.thumb} alt="" />
              </>
            ) : preview_photos.length === 2 ? (
              <>
                <img src={preview_photos[0].urls.thumb} alt="" />
                <img src={preview_photos[1].urls.thumb} alt="" />
              </>
            ) : (
              <img src={preview_photos[0].urls.thumb} alt="" />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Collection;
