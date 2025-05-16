import './styles.css';

// placeholder todo class
function TodoItem (title: string, desc: string, dueDate: string, priority: string) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
}

// idk what type this has to be yet
function TodoLists (...list: any) {
  this.list = [...list]
}
