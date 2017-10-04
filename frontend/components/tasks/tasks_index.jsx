import React from 'react';

export default class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div>inside tasks index</div>
    );
  }
}
