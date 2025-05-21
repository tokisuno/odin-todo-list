import { format } from 'date-fns';

export class TodoItem  {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;

    // this.id = format(new Date(), "yyyyMMddHHmmss");
    // this.id = `${Math.floor(Math.random() * 999)}`; // for testing
  }

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
