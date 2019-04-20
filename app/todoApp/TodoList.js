import React, { Component } from "react";

import Todo from "./Todo";

const TodoList = ({ tasks, onTaskToggle, onTaskDelete, onTaskEdit }) => {
  return tasks.map(task => {
    return (
      <Todo
        key={task.id}
        {...task}
        onCheckBoxToggle={() => {
          onTaskToggle(task.id);
        }}
        onDeleteButtonClick={() => {
          onTaskDelete(task.id);
        }}
        onSubmitEdit={newContent => {
          onTaskEdit(task.id, newContent);
        }}
      />
    );
  });
};

export default TodoList;
