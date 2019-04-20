import React from "react";

const filters = {
  ALL_TASKS: "all",
  ACTIVE_TASKS: "active",
  COMPLETED_TASKS: "completed"
};

const TodoFilter = ({ count, filter }) => {
  const getCountText = count => {
    if (count > 2) {
      return `${count} tasks`;
    }
    return `${count} task`;
  };
  const getActiveFilterClass = filterType => {
    return filter === filterType ? "button is-active is-primary" : "button";
  };

  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <span className="tag is-primary is-medium">
            {getCountText(count)}
          </span>
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
          <a className="button is-light">Clear Completed</a>
        </div>
      </div>
    </div>
  );
};

export { TodoFilter, filters };
