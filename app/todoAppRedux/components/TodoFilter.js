import React from "react";
import styles from "./TodoFilter.module.scss";

const TodoFilter = ({
  tasks,
  taskLeft,
  activeFilter,
  filters,
  onClearCompleted,
  onFilterSelect
}) => {
  const getCountText = () => {
    if (taskLeft > 2) {
      return `${taskLeft} tasks left`;
    }
    return `${taskLeft} task left`;
  };
  const getActiveFilterClass = filterType => {
    return activeFilter === filterType
      ? "button is-active is-primary"
      : "button";
  };
  const clearCompletedPressed = () => {
    onClearCompleted(tasks);
  };
  return (
    <div className="box">
      <div className={`media ${styles.filter}`}>
        <div className="media-left">
          <span className="tag is-dark is-medium">{getCountText()}</span>
        </div>
        <div className="media-content">
          <div className="buttons has-addons is-centered">
            <a
              href={"#/"}
              className={getActiveFilterClass(filters.SHOW_ALL)}
              onClick={() => onFilterSelect(filters.SHOW_ALL)}
            >
              All
            </a>
            <a
              href={"#/active"}
              className={getActiveFilterClass(filters.SHOW_ACTIVE)}
              onClick={() => onFilterSelect(filters.SHOW_ACTIVE)}
            >
              Active
            </a>
            <a
              href={"#/completed"}
              className={getActiveFilterClass(filters.SHOW_COMPLETED)}
              onClick={() => onFilterSelect(filters.SHOW_COMPLETED)}
            >
              Completed
            </a>
          </div>
        </div>
        <div className="media-right">
          <a className="button is-light" onClick={clearCompletedPressed}>
            Clear Completed
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoFilter;
