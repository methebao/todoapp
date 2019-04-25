import React, { Component } from "react";

import Todo from "./Todo";

const TodoList = ({ tasks, onTaskToggle, onTaskDelete, onTaskEdit }) => {
  return tasks.map((task, index) => {
    return (
      <Todo
        key={index}
        {...task}
        onCheckBoxToggle={() => {
          onTaskToggle(task);
        }}
        onDeleteButtonClick={() => {
          onTaskDelete(task.id);
        }}
        onSubmitEdit={newContent => {
          if (newContent !== task.content) {
            onTaskEdit({
              id: task.id,
              content: newContent,
              isCompleted: task.isCompleted
            });
          }
        }}
      />
    );
  });
};

export default TodoList;
