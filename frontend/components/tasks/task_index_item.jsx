import React from 'react';
import { ItemTypes } from '../constants';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
// import flow from 'lodash/flow';

const taskSource = {
  beginDrag(props) {
    return {
      index: props.index
    };
  }
};

const taskTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
       return;
    }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveTask(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   };
// }

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { task, index, connectDragSource, isDragging, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
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
    ));
  }
}

export default DragSource(ItemTypes.TASK, taskSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(DropTarget(ItemTypes.TASK, taskTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))(TaskIndexItem));
