import './styles.css';

// placeholder todo class
function TodoItem (title, desc, dueDate, priority) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
}

function TodoLists (...list) {
  this.list = [...list]
}
