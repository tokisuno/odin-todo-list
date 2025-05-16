import './styles.css';

// placeholder todo class
class TodoItem {
  title: string;
  desc: string;
  dueDate: string;
  priority: string;

  constructor(title: string, desc: string, dueDate: string, priority: string) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class TodoList {
  lists: Array<TodoItem>;

  constructor(lists: Array<TodoItem>) {
    this.lists = [...lists]
  }
}

// idk what type this has to be yet
// function TodoLists (...list: any) {
//   this.list = [...list]
// }
