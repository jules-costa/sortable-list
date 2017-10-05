export const fetchTaskList = () => (
  $.ajax({
    method: 'GET',
    url: 'http://cfassignment.herokuapp.com/julianne/tasks'
  })
);

export const saveTaskList = (tasks) => (
  $.ajax({
    method: 'POST',
    url: 'http://cfassignment.herokuapp.com/julianne/tasks',
    data: JSON.stringify({tasks})
  })
);