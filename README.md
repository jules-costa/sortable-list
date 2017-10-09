# Sortable List

### Technologies

React, Redux, Webpack, Babel, HTML5, CSS3

### Description

 Tasks are fetched when the `TasksIndex` component mounts, and tasks are stored in state to be passed to each `TaskIndexItem`. Each `TaskIndexItem` is wrapped in both `DragSource` and `DropTarget`, provided by `react-dnd`.

### Challenges

Making a POST request to the provided endpoint was unexpectedly challenging due to lack of information regarding the attributes of a Task object and how Tasks are stored in the database. Figuring it out required a lot of trial and error testing via Postman.

### Opportunities

- Extracting drag-and-drop logic out into a higher-order component

- Extract alerts into their own component

- Testing React components with Jest and Enzyme

- Implementing in-line editing  

- Refactoring to use `fetch()` instead of AJAX
