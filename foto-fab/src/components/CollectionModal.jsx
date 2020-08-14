import React, { Component } from "react";
import "./styles/collectionForm.scss";
import { connect } from "react-redux";

import {
  createANewCollection,
  addPhotoToACollection,
} from "../redux/actions/userAction";

class collectionModal extends Component {
  state = {
    content: "",
    prev: false,
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.content;
    if (title === "") {
      alert("title required");
    } else {
      console.log(title);
      this.props.createANewCollection(
        title,
        this.props.accessTokenData.access_token
      );
      this.props.handleDisplay();
      alert("it may take longer to create new collection");
    }
  };

  showPrevCollection = () => {
    this.setState({ prev: true });
  };

  handleAdd = (colId, id, access_token) => {
    this.props.addPhotoToACollection(colId, id, access_token);
    this.props.handleDisplay();
    alert("it may take longer to add your photos to this collection");
  };

  render() {
    return (
      <div
        className="collection-form"
        style={{
          display: `${this.props.display}`,
        }}
      >
        {!this.state.prev ? (
          <>
            <form>
              <label>
                Create New Collection
                <input
                  type="text"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>ADD</button>
              </label>
            </form>
            <button onClick={this.showPrevCollection}>
              Add in Existing Collection
            </button>
          </>
        ) : (
          <ul>
            {!this.props.collection ? (
              <p>NO COLLECTIONS AVAILABLE</p>
            ) : (
              this.props.collection.map((col) => (
                <li
                  key={col.id}
                  onClick={() =>
                    this.handleAdd(
                      col.id,
                      this.props.id,
                      this.props.accessTokenData.access_token
                    )
                  }
                >
                  {col.title}
                </li>
              ))
            )}
          </ul>
        )}
        <button onClick={() => this.props.handleDisplay()}>Cancel</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collection: state.currentUserState.collections,
    accessTokenData: state.userState.accessTokenData,
  };
};

export default connect(mapStateToProps, {
  createANewCollection,
  addPhotoToACollection,
})(collectionModal);
