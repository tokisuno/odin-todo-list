import { format } from 'date-fns';

export class TodoItem  {
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
