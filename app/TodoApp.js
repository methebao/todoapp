import React from "react";
import TodoForm from "./todoApp/TodoForm";
import TodoList from "./todoApp/TodoList";
import { TodoFilter, filters } from "./todoApp/TodoFilter";
import { withRouter } from "react-router-dom";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          content: "This is 1st Todo",
          isCompleted: false
        },
        {
          id: 2,
          content: "This is 2st Todo",
          isCompleted: true
        },
        {
          id: 3,
          content: "This is 3st Todo",
          isCompleted: false
        }
      ],
      filter: filters.ALL_TASKS
    };
  }

  componentDidMount() {
    window.addEventListener(
      "hashchange",
      this.setupRouteFilters.bind(this),
      false
    );

    this.setupRouteFilters();
  }
  componentWillUnmount() {
    window.removeEventListener(
      "hashchange",
      this.setupRouteFilters.bind(this),
      false
    );
  }
  setupRouteFilters() {
    let appPath = "todo-app/";
    switch (window.location.hash.slice(2)) {
      case filters.ACTIVE_TASKS:
        this.setState({ filter: filters.ACTIVE_TASKS });
        break;
      case filters.COMPLETED_TASKS:
        this.setState({ filter: filters.COMPLETED_TASKS });
        break;
      default:
        this.setState({ filter: filters.ALL_TASKS });
    }
  }
  setTasks(tasks) {
    this.setState({ tasks });
  }
  addTask(task) {
    this.setTasks([...this.state.tasks, task]);
  }
  editTask(id, newContent) {
    this.setTasks(
      this.state.tasks.map(task => {
        if (task.id === id) {
          task.content = newContent;
        }
        return task;
      })
    );
  }
  toogleTask(id) {
    this.setTasks(
      this.state.tasks.map(task => {
        if (id === task.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      })
    );
  }
  deleteTask(id) {
    this.setTasks(
      this.state.tasks.filter(task => {
        return id !== task.id;
      })
    );
  }
  render() {
    let filteredTasks = this.state.tasks.filter(task => {
      switch (this.state.filter) {
        case filters.ACTIVE_TASKS:
          return !task.isCompleted;
        case filters.COMPLETED_TASKS:
          return task.isCompleted;
        default:
          return true;
      }
    });
    return (
      <main>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">TodoApp</h1>
              <h2 className="subtitle">Using only React</h2>
            </div>
          </div>
        </section>
        <section className="section add-todo">
          <div className="container">
            <TodoForm onTaskAdd={task => this.addTask(task)} />
          </div>
        </section>
        <section className="section todo-list">
          <div className="container">
            <div className="box">
              <TodoList
                tasks={filteredTasks}
                onTaskToggle={id => this.toogleTask(id)}
                onTaskDelete={id => this.deleteTask(id)}
                onTaskEdit={(id, newContent) => this.editTask(id, newContent)}
              />
            </div>
          </div>
        </section>
        <section className=" todo-filter">
          <div className="container">
            <TodoFilter
              count={this.state.tasks.length}
              filter={this.state.filter}
            />
          </div>
        </section>
      </main>
    );
  }
}
export default withRouter(TodoApp);
