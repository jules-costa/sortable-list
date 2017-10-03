import { connect } from 'react-redux';
import TasksIndex from './tasks_index';
import values from 'lodash/values';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = (state) => ({
  tasks: values(state.tasks)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksIndex);
