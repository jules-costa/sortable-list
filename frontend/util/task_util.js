export const fetchTaskList = () => (
  $.ajax({
    method: 'GET',
    url: "http://cfassignment.herokuapp.com/julianne_costa/tasks"
  })
);

export const saveTaskList = (tasks) => (
  $.ajax({
    method: 'POST',
    url: "http://cfassignment.herokuapp.com/julianne_costa/tasks",
    data: {tasks}
  })
);

// export const createTask
//
// export const destroyTask
