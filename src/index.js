import './styles.css';

import { App } from './app/app.js';
import { List } from './app/list.js';
import { TodoItem } from './app/todoitem.js';

// Main list that is initialized on startup
// - I only want defined behaviour, meaning that I don't want these constructures to take any params. I only want them
//          to add items when I want them to, and remove them when I want them to.

// Temporary Testing Field
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
// Temporary Testing Field
