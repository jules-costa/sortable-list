import React from 'react';

export default class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>inside tasksIndex</div>
    );
  }
}
