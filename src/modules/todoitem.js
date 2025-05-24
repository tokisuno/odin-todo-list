import { format } from 'date-fns';

export class TodoItem {
  constructor(title, desc, dueDate, priority) {
    this.title = title || "New item";
    this.desc = desc || "New item description";
    this.dueDate = dueDate || null;
    this.priority = priority || 0;
    this.expanded = false

    // this.id = format(new Date(), "yyyyMMddHHmmss");
    // this.id = `${Math.floor(Math.random() * 999)}`; // for testing
  }

  changeTitle(newTitle) {
    this.title = `${newTitle}`;
  }

  changeDesc(newDesc) {
    this.title = `${newDesc}`;
  }

  changeDueDate(newDueDate) {
    this.title = `${newDueDate}`;
  }

  changePriority(newPriority) {
    this.priority = `${newPriority}`;
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  drawTodoItem(item, count) {
    const listItem = document.createElement("div");
    listItem.setAttribute("id", `${count}`);

    const title = document.createElement("div");
    title.textContent = item.title;

    const desc = document.createElement("div");
    desc.textContent = item.desc;

    const dueDate = document.createElement("div");
    dueDate.textContent = item.dueDate;

    const priority = document.createElement("div");
    priority.textContent = item.priority;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove item";
    removeBtn.setAttribute("id", "remove");

    listItem.setAttribute("class", "item");

    listItem.appendChild(title);
    listItem.appendChild(desc);
    listItem.appendChild(dueDate);
    listItem.appendChild(priority);
    listItem.appendChild(removeBtn);

    return listItem;
  }
}
