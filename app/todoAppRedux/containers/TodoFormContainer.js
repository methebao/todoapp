import { connect } from "react-redux";
import TodoForm from "../../todoApp/TodoForm";
import { addTask } from "../actions/index";

const mapDispatchToProps = dispatch => ({
  onTaskAdd: task => dispatch(addTask(task))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
