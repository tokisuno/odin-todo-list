export function drawTitle() {
  const title = document.createElement("h1");
  title.textContent =
    "tokisuno's awesome todo list (of tasks and awesome things)";
  document.body.appendChild(title);
}

export function drawLists(app) {
  const listDiv = document.createElement("div");
  listDiv.setAttribute("id", "lists");

  app.lists.forEach((list) => {
    const listItem = document.createElement("div");
    listItem.setAttribute("id", `${list.name}`);
    listItem.setAttribute("class", "list");
    const listName = document.createElement("div");
    listName.textContent = list.name;

    const expandBtn = document.createElement("button");
    expandBtn.textContent = "Open list!";

    expandBtn.addEventListener("click", (e) => {
      if (list.expanded === false) {
        expandTodoList(list);
        list.expanded = !list.expanded;
      } else {
        console.log(list.expanded);
      }
    });

    listItem.appendChild(listName);
    listDiv.appendChild(listItem);
    listItem.appendChild(expandBtn);
  });
  document.body.appendChild(listDiv);
}

export function expandTodoList(list) {
  console.log(list);
  const todoList = document.querySelector(`div#${list.name}`);
  todoList.innerHTML = "";

  let count = 0;

  list.items.forEach((item) => {
    const listItem = drawTodoItem(item, count++);
    todoList.appendChild(listItem);
  });

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close list";
  closeBtn.addEventListener("click", () => {
    console.log("close this div, show list of all lists again");
  });
  todoList.appendChild(closeBtn);

  document.querySelector("div#lists").appendChild(todoList);
}

export function drawTodoItem(item, count) {
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
  removeBtn.addEventListener("click", () => {
    console.log('remove this item from the todo list');
  })

  listItem.setAttribute("class", "item");

  listItem.appendChild(title);
  listItem.appendChild(desc);
  listItem.appendChild(dueDate);
  listItem.appendChild(priority);
  listItem.appendChild(removeBtn);

  return listItem;
}
