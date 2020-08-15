import React, { Component } from "react";
import "./styles/createCollection.scss";
import { connect } from "react-redux";
import { createANewCollection } from "../redux/actions/userAction";

import { showCreateCollectionModal } from "../redux/actions/currentUserAction";

class CreateCollection extends Component {
  state = {
    content: "",
    create: false,
    createNew: false,
    createdCollection: false,
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.content;
    if (title === "") {
      alert("title required");
    } else {
      console.log(title);
      this.props.createANewCollection(
        title,
        this.props.accessTokenData.access_token
      );
      this.setState({ createdCollection: true });
      alert("it may take longer to create new collection");
    }
  };

  render() {
    return (
      this.props.showModal && (
        <div className="collection-modal">
          <div className="modal-container">
            <form className="create-new-collection">
              <p>Create New Collection</p>
              <div>
                <input
                  type="text"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>CREATE</button>
              </div>
            </form>
            <button
              className="cancel"
              onClick={() => this.showCreateCollectionModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collection: state.currentUserState.collections,
    accessTokenData: state.userState.accessTokenData,
    newCollection: state.userState.newCollection,
    showModal: state.currentUserState.showModal,
  };
};

export default connect(mapStateToProps, {
  createANewCollection,
  showCreateCollectionModal,
})(CreateCollection);