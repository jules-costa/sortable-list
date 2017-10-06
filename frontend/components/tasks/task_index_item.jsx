import React from 'react';

export default class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { task, index } = this.props;
    return (
      <li>
        {task.title}
        <button className="delete-button" onClick={() => this.props.deleteTask(index)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </li>

    );
  }
}
