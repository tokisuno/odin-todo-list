export class List {
  constructor() {
    this.items = []
  }

  addItem (item) {
    this.items.push(item);
  }

  removeItem (item_id) {
    console.log(this.items[item_id] === this.items[0]);
  }
}
