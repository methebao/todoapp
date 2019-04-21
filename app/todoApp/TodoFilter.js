import React from "react";

import styles from "./TodoFilter.module.scss";

const filters = {
  ALL_TASKS: "all",
  ACTIVE_TASKS: "active",
  COMPLETED_TASKS: "completed"
};

const TodoFilter = ({ taskLeft, filter, onClearCompleted }) => {
  const getCountText = () => {
    if (taskLeft > 2) {
      return `${taskLeft} tasks left`;
    }
    return `${taskLeft} task left`;
  };
  const getActiveFilterClass = filterType => {
    return filter === filterType ? "button is-active is-primary" : "button";
  };

  return (
    <div className="box">
      <div className={`media ${styles.filter}`}>
        <div className="media-left">
          <span className="tag is-dark is-medium">{getCountText()}</span>
        </div>
        <div className="media-content">
          <div className="buttons has-addons is-centered">
            <a href={"#/"} className={getActiveFilterClass(filters.ALL_TASKS)}>
              All
            </a>
            <a
              href={"#/active"}
              className={getActiveFilterClass(filters.ACTIVE_TASKS)}
            >
              Active
            </a>
            <a
              href={"#/completed"}
              className={getActiveFilterClass(filters.COMPLETED_TASKS)}
            >
              Completed
            </a>
          </div>
        </div>
        <div className="media-right">
          <a className="button is-light" onClick={onClearCompleted}>
            Clear Completed
          </a>
        </div>
      </div>
    </div>
  );
};

export { TodoFilter, filters };
