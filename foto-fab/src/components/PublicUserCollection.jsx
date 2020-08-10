import React, { Component } from "react";
import { connect } from "react-redux";
import Collection from "./Collection";
import "./styles/collection.scss";

class PublicUserCollection extends Component {
  render() {
    const { collections } = this.props;
    return !collections ? null : (
      <div className="collection-container">
        {collections.map((collection) => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.publicUserState.collections,
  };
};

export default connect(mapStateToProps, null)(PublicUserCollection);
