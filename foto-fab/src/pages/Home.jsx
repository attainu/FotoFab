import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import { connect } from "react-redux";
import { fetchImages } from "../redux/actions/fetchPhotosAction";
import PhotoCard from "../components/photoCard";
import "../../src/components/styles/photoCard.scss";
import Spinner from "../components/Spinner";
import Loader from "./Loader";
class Home extends Component {
  state = {
    page_no: 1,
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
    this.props.fetchImages(this.state.page_no);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate = (prevProp, prevState) => {
    if (prevState.page_no < this.state.page_no) {
      console.log(prevState.page_no);

      this.props.fetchImages(this.state.page_no);
    } else {
      console.log("not updating");
    }
  };

  render() {
    const { photos } = this.props;
    return (
      <>
        <Searchbar />
        {photos.length !== 0 ? (
          <div>
            <div className="photo-container">
              {photos.map((image) => (
                <PhotoCard
                  photo={image}
                  key={`${Math.floor(Math.random() * 10 ** 100)}${new Date()}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <Spinner />
          // <Loader />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.photoState.photos);
  return {
    photos: state.photoState.photos,
  };
};

export default connect(mapStateToProps, { fetchImages })(Home);
