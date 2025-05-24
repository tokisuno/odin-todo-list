import "./styles.css";

// Classes
import { App } from "./modules/app.js"
import { List } from "./modules/list.js";
import { TodoItem } from "./modules/todoitem.js";

// DOM
import {
  drawTitle,
  // expandTodoList,
  drawLists,
  // drawTodoItem,
} from "./modules/draw.js";

// Temporary Testing Field
const testItem1 = new TodoItem(
  "take out the trash",
  "go and take out the trash",
  "2025-07-14",
  "3",
);

const testItem2 = new TodoItem("shower", "go and get clean", "2026-01-23", "1");

const testItem3 = new TodoItem(
  "gaming",
  "go and play video games",
  "2025-05-30",
  "2",
);

const defaultList = new List();
defaultList.addItem(testItem1);
defaultList.addItem(testItem2);
defaultList.addItem(testItem3);

const app = new App();
app.addList(defaultList);

// console.log(app.lists[0].items);
// app.lists[0].removeItem(0);
drawTitle();
// drawTodoList(app.lists);
drawLists(app);
