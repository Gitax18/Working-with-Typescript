import { CollectionNumber } from "./Collections/Collection.Numbers";

class Sorter {
  collection: CollectionNumber;

  constructor(collection: CollectionNumber) {
    this.collection = collection;
    this.sort();
  }

  private sort(): void {
    for (let i: number = 0; i < this.collection.length; i++)
      for (let j: number = 0; j < this.collection.length - i - 1; j++)
        if (this.collection.compare(j, j + 1)) this.collection.swap(j, j + 1);
  }

  public show(): void {
    console.log("Sorted Data: " + this.collection.data);
  }
}

export default Sorter;
