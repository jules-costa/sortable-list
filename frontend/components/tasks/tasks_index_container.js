import { connect } from 'react-redux';
import TasksIndex from './tasks_index';
import values from 'lodash/values';
import { fetchTasks, createTask } from '../../actions/task_actions';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  createTask: (task) => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksIndex);
