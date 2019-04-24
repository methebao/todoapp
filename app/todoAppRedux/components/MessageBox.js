import React from "react";
import { connect } from "react-redux";
import { closeMessage, fetchAllTasks } from "../actions";

const MessageBox = ({ requestResult, onCloseMessageBox }) => {
  return requestResult.message ? (
    <article
      className={`message ${
        requestResult.isSuccess ? "is-success" : "is-danger"
      }`}
    >
      <div className="message-header">
        <p style={{ marginRight: "10px" }}>{requestResult.message}</p>
        <button
          className="delete"
          aria-label="delete"
          onClick={onCloseMessageBox}
        />
      </div>
    </article>
  ) : null;
};
const mapStateToProps = state => ({
  requestResult: state.todos.requestResult
});
const mapDispatchToProps = dispatch => ({
  onCloseMessageBox: () => dispatch(closeMessage())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBox);
