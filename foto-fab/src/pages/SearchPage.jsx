import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import { connect } from "react-redux";
import { searchImages, emptyImages } from "../redux/actions/searchPhotosAction";
import PhotoCard from "../components/photoCard";
import "../../src/components/styles/photoCard.scss";
import Spinner from "../components/Spinner";
import MobileNavigation from "../components/mobileNavigation";
class searchPage extends Component {
  state = {
    page_no: 1,
    query: "",
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
    console.log("fetching movie");
    console.log(this.props.match.params.searchQuery);
    this.props.emptyImages();
    this.props.searchImages(
      this.state.page_no,
      this.props.match.params.searchQuery
    );

    this.setState({ query: this.props.match.params.searchQuery });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate = (prevProp, prevState) => {
    const oldQuery = this.state.query;
    const newSearchQuery = this.props.match.params.searchQuery;
    console.log(this.props.match.params.searchQuery);
    if (prevState.page_no < this.state.page_no) {
      console.log(prevState.page_no);
      console.log("loading more photos");
      this.props.searchImages(
        this.state.page_no,
        this.props.match.params.searchQuery
      );
    } else {
      console.log("not updating");
    }
    if (newSearchQuery !== oldQuery) {
      this.props.emptyImages();
      this.setState({ query: newSearchQuery });
      console.log("searching new photos");
      this.props.searchImages(
        this.state.page_no,
        this.props.match.params.searchQuery
      );
    } else {
      console.log("not loading new photos");
    }
  };
  render() {
    console.log(this.props.match.params.searchQuery);
    const { searchPhotos } = this.props;
    return (
      <>
        <Searchbar />
        {searchPhotos.length !== 0 ? (
          <div>
            <div className="photo-container">
              {searchPhotos.map((image) => (
                <PhotoCard
                  photo={image}
                  key={`${Math.floor(Math.random() * 10 ** 100)}${new Date()}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
        <MobileNavigation />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.searchPhotoState.photos);
  return {
    searchPhotos: state.searchPhotoState.photos,
  };
};
export default connect(mapStateToProps, { searchImages, emptyImages })(
  searchPage
);
