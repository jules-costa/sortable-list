import React from 'react';

export default class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(e) {
    e.preventDefault();
  }

  render() {
    const { task } = this.props;
    return (
      <li>
        {task.title}
        <button className="delete-button" onClick={this.deleteTask}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </li>

    );
  }
}
