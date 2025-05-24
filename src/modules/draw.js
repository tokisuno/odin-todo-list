import { saveData, accessData } from './storage.js';

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
        list.expandList();
      }
      // if (list.expanded === false) {
      //   expandTodoList(list);
      //   list.expanded = !list.expanded;
      // }
      // console.log(list.expanded);
    });

    listItem.appendChild(listName);
    listDiv.appendChild(listItem);
    listItem.appendChild(expandBtn);
  });
  document.body.appendChild(listDiv);
}

function expandTodoList(list) {
  console.log(list);
}

function closeTodoList(list) {
  console.log(list)
  list.innerHTML = '';

}

