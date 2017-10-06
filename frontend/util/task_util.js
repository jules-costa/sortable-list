export const fetchTaskList = () => (
  $.ajax({
    method: 'GET',
    url: 'https://cfassignment.herokuapp.com/julianne/tasks'
  })
);

export const saveTaskList = (tasks) => {
  let taskList = JSON.stringify({"tasks": tasks});
  return (
    $.ajax({
      method: 'POST',
      url: 'https://cfassignment.herokuapp.com/julianne/tasks',
      data: taskList,
      contentType: 'application/json'
    })
  );
};
