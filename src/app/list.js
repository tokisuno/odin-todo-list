export class List {
  constructor() {
    this.list = []
  }

  addItem (item) {
    this.list.push(item);
  }

  // HACK: idk this is copied from some stackoverflow comment. it's untested.
  removeItem (item_id) {
    this.list = this.list.filter((e) => {
      return e !== e.id[item_id]
    })
  }
}
