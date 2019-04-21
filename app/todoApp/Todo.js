import React from "react";
import styles from "./Todo.module.scss";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, content: this.props.content };
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  toggleEditing(e) {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleEditing(content) {
    this.setState({ content });
  }
  submitEditing() {
    this.props.onSubmitEdit(this.state.content);
  }
  handleClickOutside = () => {
    this.submitEditing();
    this.setState({ isEditing: !this.state.isEditing });
  };
  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    if (this.state.isEditing) {
      this.handleClickOutside();
    }
  };
  render() {
    const {
      id,
      content,
      isCompleted,
      onCheckBoxToggle,
      onDeleteButtonClick
    } = this.props;
    return (
      <div id={id} className="media">
        <div className={`${styles.checkbox} media-left`}>
          <input
            className={styles.input}
            type={"checkbox"}
            checked={isCompleted}
            onChange={onCheckBoxToggle}
          />
          <span className={styles.checkmark} />
        </div>
        <div className="media-content">
          <div
            ref={node => (this.node = node)}
            className="content"
            onDoubleClick={() => this.toggleEditing()}
          >
            {this.state.isEditing ? (
              <input
                className="input"
                type={"text"}
                value={this.state.content}
                onChange={e => {
                  this.handleEditing(e.target.value);
                }}
              />
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
        <div className="media-right">
          <button className="delete" onClick={onDeleteButtonClick} />
        </div>
      </div>
    );
  }
}

export default Todo;
