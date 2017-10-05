import { connect } from 'react-redux';
import TasksIndex from './tasks_index';
import values from 'lodash/values';
import { fetchTasks, saveTasks } from '../../actions/task_actions';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  saveTasks: (tasks) => dispatch(saveTasks(tasks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksIndex);
