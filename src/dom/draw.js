export function drawTitle () {
  const title = document.createElement("h1");
  title.textContent = "tokisuno's awesome todo list (of tasks and awesome things)";
  document.body.appendChild(title);
}

export function drawLists(app) {
  const listDiv = document.createElement("div");

  app.lists.forEach((list) => {
    const title = document.createElement("div");
    title.textContent = list.name;

    const expandBtn = document.createElement("button");
    expandBtn.textContent = "Open list!"

    expandBtn.addEventListener("click", (e) => {
      if (list.expanded === false) {
        drawTodoList(list);
        list.expanded = !list.expanded;
      } else {
        console.log(list.expanded);
      }
    })

    listDiv.appendChild(title);
    listDiv.appendChild(expandBtn);
  })
  document.body.appendChild(listDiv)
}

export function drawTodoList(list) {
  console.log(list)
  const todoList = document.createElement("div")
  todoList.setAttribute("id", `${list.name}`)
  let count = 0;
  list.items.forEach((item) => {
    const listItem = drawTodoItem(item, count);
    todoList.appendChild(listItem);
  })
  document.body.appendChild(todoList);
}

export function drawEveryList(lists) {
  console.log(lists)
  lists.forEach((list) => {
    const todoList = document.createElement("div")
    todoList.setAttribute("id", `${list.name}`)
    let count = 0;

    list.items.forEach((item) => {
      const listItem = drawTodoItem(item, count);
      todoList.appendChild(listItem);
    })
    document.body.appendChild(todoList);
  })
}

export function drawTodoItem(item, count) {
  const listItem = document.createElement("div");
  listItem.setAttribute("id", `${++count}`);

  const title = document.createElement("div");
  title.textContent = item.title;

  const desc = document.createElement("div");
  desc.textContent = item.desc;

  const dueDate = document.createElement("div");
  dueDate.textContent = item.dueDate;

  const priority = document.createElement("div");
  priority.textContent = item.priority;

  const id = document.createElement("div");
  id.textContent = item.id;

  [title, desc, dueDate, priority, id].forEach((e) => {
    listItem.appendChild(e);
  })

  return listItem;
}

