import React from 'react';
import TaskIndexItem from './task_index_item';
import { DragDropContext } from 'react-dnd';
import update from 'immutability-helper';
import HTML5Backend from 'react-dnd-html5-backend';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      title: "",
      disabled: true,
      alert: false,
      message: ""
    };
    this.moveTask = this.moveTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  moveTask(dragIndex, hoverIndex) {
    const { tasks } = this.state;
    const dragTask = tasks[dragIndex];

    this.setState(update(this.state, {
      tasks: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragTask]
        ]
      }
    }));
    this.setState({
      disabled: false
    });
  }

  componentDidMount() {
    this.props.fetchTasks().then((tasks) => (
      this.setState({
        tasks: [...this.props.tasks],
        alert: false,
        message: ""
      })
    ));
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.errors) !== JSON.stringify(nextProps.errors)) {
      this.setState({
        alert: true,
        message: "failure"
      });
    } else if (JSON.stringify(this.props.tasks) !== JSON.stringify(nextProps.tasks)) {
      this.setState({
        alert: true,
        message: "success!"
      });
    }
  }

  update(field) {
    return (e) => this.setState({ [field] : e.target.value });
  }

  deleteTask(taskIndex) {
    this.state.tasks.splice(taskIndex, 1);
    this.setState({
      tasks: this.state.tasks,
      disabled: false
    });
  }

  addTask(e) {
    e.preventDefault();
    let newTask = {title: this.state.title};
    this.setState({
      tasks: [newTask].concat(this.state.tasks),
      disabled: false
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    let allTasks = this.state.tasks;
    this.props.saveTasks(allTasks);
  }

  hideAlert(e) {
    e.preventDefault();
    e.target.parentElement.style.display='none';
    this.setState({
      alert: false,
      message: ""
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error=${i}`}>
            { `${error}, please try again.` }
          </li>
        ))}
      </ul>
    );
  }

  displayAlert(message) {
    return(
      <div className="alert">
        <span className="closebtn" onClick={this.hideAlert}>&times;</span>
        {`${message}`}
      </div>
    );
  }

  render() {
    return (
      <section className="tasks-list-container">
        <textarea
          type="text"
          className="new-task"
          placeholder="New task"
          value={this.state.title}
          onChange={this.update('title')}>
        </textarea>
        <button className="new-task-button" onClick={this.addTask}>Add Task</button>
        <button className="new-task-button" disabled={this.state.disabled} onClick={this.handleSubmit}>Save</button>
        <ul className="tasks-list">
          {this.state.tasks ? this.state.tasks.map((task, i) =>
            <TaskIndexItem
              key={task.title}
              index={i}
              task={task}
              tasks={this.props.tasks}
              deleteTask={this.deleteTask.bind(this)}
              moveTask={this.moveTask}
              />
          ) : ""}
        </ul>
        {this.renderErrors()}
        {this.state.alert ? this.displayAlert(this.state.message) : ""}
      </section>
    );
  }
}

export default DragDropContext(HTML5Backend)(TasksIndex);
