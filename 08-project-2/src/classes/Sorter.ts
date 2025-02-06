import { CollectionNumber } from "./Collections/Collection.Numbers";

// All collection must implements Sortable interface to able sort data
export interface Sortable {
  length: number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}

class Sorter {
  collection: Sortable;

  constructor(collection: Sortable) {
    this.collection = collection;
  }

  public sort(): void {
    for (let i: number = 0; i < this.collection.length; i++)
      for (let j: number = 0; j < this.collection.length - i - 1; j++)
        if (this.collection.compare(j, j + 1)) this.collection.swap(j, j + 1);
  }
}

export default Sorter;
