import React, { Component } from "react";
import Pagination from "bulma-pagination-react";

const Paper = ({ tasks, currentPage, perPage, onChangePage }) => {
  const pages = Math.ceil(tasks.length / perPage);
  return (
    <Pagination
      pages={pages}
      currentPage={currentPage}
      onChange={page => onChangePage(page, perPage)}
    />
  );
};

export default Paper;
