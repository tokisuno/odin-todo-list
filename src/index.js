import './styles.css';

// Main list that is initialized on startup
// - I only want defined behaviour, meaning that I don't want these constructures to take any params.
// - I only want them to add items when I want them to, and remove them when I want them to.

import { App } from './app/app.js';
import { List } from './app/list.js';
import { TodoItem } from './app/todoitem.js';

//          ╭─────────────────────────────────────────────────────────╮
//          │                 Temporary Testing Field                 │
//          ╰─────────────────────────────────────────────────────────╯
const testItem1 = new TodoItem(
  "take out the trash",
  "go and take out the trash",
  "2025-07-14",
  "3"
);

const testItem2 = new TodoItem(
  "shower",
  "go and get clean",
  "2026-01-23",
  "1"
);

const testItem3 = new TodoItem(
  "gaming",
  "go and play video games",
  "2025-05-30",
  "2"
);

const defaultList = new List();
defaultList.addItem(testItem1);
defaultList.addItem(testItem2);
defaultList.addItem(testItem3);

const app = new App();
app.addList(defaultList);

console.log(app.lists[0].items);
app.lists[0].removeItem(0);
//          ╭─────────────────────────────────────────────────────────╮
//          │                 Temporary Testing Field                 │
//          ╰─────────────────────────────────────────────────────────╯
