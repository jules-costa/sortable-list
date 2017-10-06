import React from 'react';

export default class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    };

    this.deleteTask = this.deleteTask.bind(this);
  }

  // componentWillMount() {
  //   this.props.fetchTasks().then((tasks) => (
  //     this.setState({
  //       tasks: [...this.props.tasks]
  //     })
  //   ));
  // }

  deleteTask(taskIndex) {
    console.log(taskIndex);
    console.log(this.state.tasks);
    this.setState({
      tasks: this.state.tasks.splice(taskIndex, 1)
    });
  }

  render() {
    const { task } = this.props;
    console.log(this.props);
    return (
      <li>
        {task.title}
        <button className="delete-button" onClick={() => this.deleteTask(this.props.index)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </li>

    );
  }
}
