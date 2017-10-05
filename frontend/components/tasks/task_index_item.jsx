import React from 'react';

export default class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { task } = this.props;
    return (
      <li>
        {task.title}
      </li>

    );
  }
}
