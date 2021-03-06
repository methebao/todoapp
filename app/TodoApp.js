import React from "react";
import APIClient from "./services/APIClient";
import TodoForm from "./todoApp/TodoForm";
import TodoList from "./todoApp/TodoList";
import { TodoFilter, filters } from "./todoApp/TodoFilter";
import { withRouter } from "react-router-dom";
import Paper from "./layout/Pagination";
import LoadingSpinner from "./components/LoadingSpinner";

import "./styles/main.scss";

const TASKS_PER_PAGE = 4;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isLoading: true,
      filter: filters.ALL_TASKS,
      currentPage: 1
    };
    APIClient.createResource({ name: "todos" });
  }

  componentDidMount() {
    window.addEventListener(
      "hashchange",
      this.setupRouteFilters.bind(this),
      false
    );
    this.setupRouteFilters();
    this.fetchTasks();
  }

  componentWillUnmount() {
    window.removeEventListener(
      "hashchange",
      this.setupRouteFilters.bind(this),
      false
    );
  }
  async fetchTasks() {
    try {
      let { data } = await APIClient.endpoints.todos.getAll();
      this.setTasks(data);
    } catch (err) {
      console.log(err);
    }

    // APIClient.endpoints.todos.getAll().then(({ data }) => this.setTasks(data));
  }
  getFilteredTasks() {
    return this.state.tasks.filter(task => {
      switch (this.state.filter) {
        case filters.ACTIVE_TASKS:
          return !task.isCompleted;
        case filters.COMPLETED_TASKS:
          return task.isCompleted;
        default:
          return true;
      }
    });
  }

  getCurrentPageTasks(page, tasksPerPage) {
    let activeTasks = this.getFilteredTasks();
    let startPageIndex = page * tasksPerPage - tasksPerPage;
    let pageTask = [];
    for (let i = startPageIndex; i < startPageIndex + tasksPerPage; i++) {
      if (activeTasks[i]) {
        pageTask.push(activeTasks[i]);
      }
    }
    return pageTask;
  }

  changePage(page, tasksPerPage) {
    this.setState({
      currentPage: page,
      currentPageTasks: this.getCurrentPageTasks(page, tasksPerPage)
    });
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
    this.setState({ tasks, isLoading: false });
  }

  async addTask(task) {
    let response = await APIClient.endpoints.todos.create(task);
    try {
      if (response.status === 201 || response === 200) {
        this.setTasks([...this.state.tasks, task]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async editTask(newTask) {
    this.setState({ isLoading: true });
    try {
      let { data } = await APIClient.endpoints.todos.update(newTask);
      this.setTasks(
        this.state.tasks.map(task => {
          if (task.id === data.id) {
            task.content = data.content;
          }
          return task;
        })
      );
    } catch (err) {
      console.log(err);
    }
  }
  toogleTask(id) {
    this.setTasks(
      this.state.tasks.map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
          APIClient.endpoints.todos.update(task).then(({ data }) => {
            if (data) {
              console.log("Toggled: " + data);
            }
          });
        }
        return task;
      })
    );
  }

  async clearCompleted() {
    this.setState({ isLoading: true });
    for (let task of this.state.tasks) {
      if (task.isCompleted) {
        await this.deleteTask(task.id);
        let clearedTasks = this.state.tasks.filter(task => {
          return !task.isCompleted;
        });
        this.setTasks(clearedTasks);
      }
    }
  }

  async deleteTask(id) {
    this.setState({ isLoading: true });
    try {
      let { data } = await APIClient.endpoints.todos.delete({ id });
      this.setTasks(
        this.state.tasks.filter(task => {
          return id !== task.id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  getTaskLeftCount() {
    return this.state.tasks.filter(task => {
      return !task.isCompleted;
    }).length;
  }

  render() {
    const { isLoading, filter } = this.state;
    let taskLeftCount = this.getTaskLeftCount();
    let allFilteredTasks = this.getFilteredTasks();
    let filteredTasks = this.getCurrentPageTasks(
      this.state.currentPage,
      TASKS_PER_PAGE
    );

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
            <div className="media">
              <div className="media-left">
                <LoadingSpinner isLoading={isLoading} />
              </div>
              <div className="media-content">
                <TodoForm onTaskAdd={task => this.addTask(task)} />
              </div>
            </div>
          </div>
        </section>
        <section className="section todo-list">
          <div className="container">
            <div className="box">
              <TodoList
                tasks={filteredTasks}
                onTaskToggle={task => this.toogleTask(task.id)}
                onTaskDelete={id => this.deleteTask(id)}
                onTaskEdit={newTask => this.editTask(newTask)}
              />
            </div>
            <Paper
              tasks={allFilteredTasks}
              currentPage={this.state.currentPage}
              perPage={TASKS_PER_PAGE}
              onChangePage={(page, perPage) => this.changePage(page, perPage)}
            />
          </div>
        </section>

        <section className=" section todo-filter">
          <div className="container">
            <TodoFilter
              taskLeft={taskLeftCount}
              filter={filter}
              onClearCompleted={() => this.clearCompleted()}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(TodoApp);
