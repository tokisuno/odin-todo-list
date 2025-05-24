import { App } from './app.js'
import { List } from './list.js'
import { TodoItem } from './todoitem.js'

import { format } from 'date-fns'

function storageAvailable(type) {
  let storage;

  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );

  }
}

export function saveData(todo) {
  todo.lists.forEach((list) => {
    if (storageAvailable("localStorage")) {
      localStorage.setItem(`${list.name}`, JSON.stringify(list));
    }
  });
}

export function accessData() {
  if (storageAvailable("localStorage")) {
    let newStorage = new App();
    Object.keys(localStorage).forEach((list, iter) => {
      let data = JSON.parse(localStorage.getItem(list));
      newStorage.addList(new List(data.name));
      data.items.forEach((item) => {
        newStorage.lists[iter].addItem(new TodoItem(item.title, item.desc, item.dueDate, item.priority));
      });
    });
    return newStorage;
  }
}
