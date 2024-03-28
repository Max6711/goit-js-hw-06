class Storage {
  #items;

  constructor(arrOfItems) {
    this.#items = arrOfItems;
  }

  getItems() {
    return this.#items;
  }

 addItem (newItem){
  this.#items.push(newItem);
}

removeItem(itemToRemove){
  const item = this.#items.indexOf(itemToRemove);
  if (item !== -1) {
    this.#items.splice(item, 1);
  }
  return this.#items;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
