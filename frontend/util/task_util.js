export const fetchTaskList = () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://cfassignment.herokuapp.com/julianne/tasks', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      let resp = request.responseText;
    }
  };

  request.onerror = function() {
    console.log("Timeout error");
  };
  request.send();
};



export const saveTaskList = (tasks) => {
  let request = new XMLHttpRequest();
  request.open('POST', 'http://cfassignment.herokuapp.com/julianne/tasks', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(tasks);
};

// export const createTask
//
// export const destroyTask
