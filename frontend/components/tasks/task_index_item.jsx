import React from 'react';
import { ItemTypes } from '../constants';
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { task, index, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <li style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        {task.title}
        <button className="delete-button" onClick={() => this.props.deleteTask(index)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </li>

    );
  }
}

export default DragSource(ItemTypes.TASK, taskSource, collect)(TaskIndexItem);
