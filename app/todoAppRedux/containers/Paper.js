import React, { Component } from "react";
import Pagination from "bulma-pagination-react";
import { connect } from "react-redux";
import { TASKS_PER_PAGE } from "../constants";
import { changePage } from "../actions";

const Paper = ({ pages, currentPage, onChangePage }) => {
  return (
    <Pagination
      pages={pages}
      currentPage={currentPage}
      onChange={page => onChangePage(page)}
    />
  );
};
const getNumberOfPages = tasks => {
  return Math.ceil(tasks.length / TASKS_PER_PAGE);
};

const mapStateToProps = ({ page, todos }) => ({
  pages: getNumberOfPages(todos.tasks),
  currentPage: page
});
const mapDispatchToProps = dispatch => ({
  onChangePage: page => dispatch(changePage(page))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paper);
