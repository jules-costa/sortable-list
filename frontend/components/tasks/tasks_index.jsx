import React from 'react';

export default class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {

    console.log(`props: ${this.props.tasks}`);
    return (

      <div>inside tasksIndex</div>
    );
  }
}
