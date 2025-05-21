export class List {
  constructor(name = 'default') {
    this.items = [];
    this.name = name;
    this.expanded = false;
  }

  addItem (item) {
    this.items.push(item);
  }

  removeItem (item_id) {
    console.log(this.items[item_id] === this.items[0]);
  }
}
