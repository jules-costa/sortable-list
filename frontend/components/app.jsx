import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TasksIndexContainer from './tasks/tasks_index_container';

export default class App extends React.Component {
  // onDragStart = () => {
  //   /*...*/
  // };
  // onDragEnd = () => {
  //   /*...*/
  // };
  render () {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        >
        <TasksIndexContainer />
      </DragDropContext>

    );
  }
}
