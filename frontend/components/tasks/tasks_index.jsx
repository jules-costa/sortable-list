import React from 'react';
import TaskIndexItem from './task_index_item';

export default class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask({title: this.state.title})
    .then(this.setState({
      title: "",
    }));
  }

  update(field) {
    return (e) => this.setState({ [field] : e.target.value });
  }

  render() {
    console.log(this.props.tasks);
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
        <button className="new-task-button" onClick={this.handleSubmit}>Add</button>

        <ul className="tasks-list">
          {this.props.tasks.map((task, i) => <TaskIndexItem key={task.id} task={task} />)}
        </ul>
      </section>
    );
  }
}
