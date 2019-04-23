import React from "react";
import styles from "./TodoForm.module.scss";
import uuid from "uuid/v4";

const TodoForm = ({ onTaskAdd }) => {
  let input;
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      if (!input.value) {
        return;
      }
      let task = {
        id: uuid(),
        content: input.value,
        isCompleted: false
      };
      onTaskAdd(task);
      input.value = "";
    }
  };
  return (
    <div className={styles.form}>
      <input
        className={"input is-primary " + styles.custom}
        ref={node => {
          input = node;
        }}
        type="text"
        placeholder="What needs want to be done ? ... 🌿"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default TodoForm;
