import React from 'react';
import TaskIndexItem from './task_index_item';

export default class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    console.log(this.props.tasks);
    const { tasks } = this.props;
    return (
      <ul className="tasks-list">
        {this.props.tasks.map((task, i) => <TaskIndexItem key={task.id} task={task} />)}
      </ul>
    );
  }
}
