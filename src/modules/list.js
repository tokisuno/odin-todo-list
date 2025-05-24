export class List {
  constructor(name = 'default') {
    this.items = [];
    this.name = name;
    this.expanded = false;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item_id) {
    console.log(this.items[item_id] === this.items[0]);
  }

  expandList() {
    const todoList = document.querySelector(`div#${this.name}`);
    todoList.innerHTML = "";

    let count = 0;

    this.items.forEach((item) => {
      // console.log(item);
      const listItem = item.drawTodoItem(item, count++);
      const removeBtn = listItem.querySelector("button#remove");
      removeBtn.addEventListener("click", () => {
        this.removeItem(listItem.id);
      })
      todoList.appendChild(listItem);
    });

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close list";
    closeBtn.addEventListener("click", () => {
      this.closeList();
    });
    todoList.appendChild(closeBtn);
    document.querySelector("div#lists").appendChild(todoList);
  }

  closeList() {

  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
