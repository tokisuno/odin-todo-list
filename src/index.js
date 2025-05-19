import './styles.css';
import { format } from 'date-fns'

// i fucking forgot that there's a native ``class`` keyword in js..........
  // ああああああ

// Main list that is initialized on startup
// - I only want defined behaviour, meaning that I don't want these constructures to take any params. I only want them
//          to add items when I want them to, and remove them when I want them to.
class App {
  constructor() {
    this.lists = []
  }

  addList (list) {
    this.lists.push(list);
  }

  removeList () {
    console.log('(TBA) Removes list from parent list');
  }
}

// just so then list has its own type
class List {
  constructor() {
    this.list = []
  }

  addItem (item) {
    this.list.push(item);
  }

  // HACK: idk this is copied from some stackoverflow comment. it's untested.
  removeItem (item_id) {
    this.list = this.list.filter((e) => {
      return e !== e.id[item_id]
    })
  }
}

// placeholder todo class
class TodoItem  {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = `todo_${format(new Date(), "yyyyMMddHHmmss")}`
  }

  // ensuring that input turns into a string, even when testing through console
  changeTitle (newTitle) {
    this.title = `${newTitle}`;
  }

  changeDesc (newDesc) {
    this.title = `${newDesc}`;
  }

  changeDueDate (newDueDate) {
    this.title = `${newDueDate}`;
  }

  changePriority (newPriority) {
    this.priority = `${newPriority}`;
  }
}

const newItem = new TodoItem(
  "take out the trash",
  "go and take out the trash",
  "2025-07-14",
  "IMPORTANT"
);

const defaultList = new List();
defaultList.addItem(newItem);

const app = new App();
app.addList(defaultList);

console.log(app.lists)
