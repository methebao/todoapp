import React from "react";
import { connect } from "react-redux";

const MessageBox = ({ requestResult }) => {
  return requestResult.message ? (
    <article
      className={`message ${
        requestResult.isSuccess ? "is-success" : "is-danger"
      }`}
    >
      <div className="message-header">
        <p>{requestResult.message}</p>
        <button className="delete" aria-label="delete" />
      </div>
    </article>
  ) : null;
};
const mapStateToProps = state => ({
  requestResult: state.todos.requestResult
});
export default connect(
  mapStateToProps,
  null
)(MessageBox);
