import React, { Component } from "react";
import "./styles/alertModal.scss";
import { showAlertModal } from "../redux/actions/currentUserAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class AlertModal extends Component {
  handleLogin = () => {
    this.props.showAlertModal();
    this.props.history.push("/login");
  };
  render() {
    return (
      this.props.showAlert && (
        <div className="alert-modal-container">
          <div className="alert-modal-main">
            <p>Please login for accomplishing this task!</p>
            <div className="buttons">
              <button className="login" onClick={this.handleLogin}>
                Login
              </button>
              <button
                className="cancel"
                onClick={() => this.props.showAlertModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showAlert: state.currentUserState.showAlert,
  };
};

export default connect(mapStateToProps, { showAlertModal })(
  withRouter(AlertModal)
);
