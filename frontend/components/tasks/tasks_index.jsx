import React from 'react';
import TaskIndexItem from './task_index_item';

export default class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      title: ""
    };
    this.addTask = this.addTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.fetchTasks().then((tasks) => (
      this.setState({
        tasks: [...this.props.tasks]
      })
    ));
  }

  update(field) {
    return (e) => this.setState({ [field] : e.target.value });
  }

  addTask(e) {
    e.preventDefault();
    let newTask = {title: this.state.title};
    this.setState({
      tasks: this.state.tasks.concat([newTask])
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let allTasks = this.state.tasks;
    debugger;
    this.props.saveTasks(allTasks);
  }


  render() {
    const { tasks } = this.props;
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
        <button className="new-task-button" onClick={this.handleSubmit}>Save</button>

        <ul className="tasks-list">
          {this.state.tasks ? this.state.tasks.map((task, i) => <TaskIndexItem key={task.title} task={task} />) : ""}
        </ul>
      </section>
    );
  }
}
