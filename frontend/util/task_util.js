export const fetchTaskList = () => (
  $.ajax({
    method: 'GET',
    url: 'https://cfassignment.herokuapp.com/julianne/tasks'
  })
);

export const saveTaskList = (tasks) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'https://cfassignment.herokuapp.com/julianne/tasks',
      data: JSON.stringify({tasks})
    })
  );
};
