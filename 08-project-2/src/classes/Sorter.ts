import { CollectionNumber } from "./Collections/Collection.Numbers";

// All collection must implements Sortable interface to able sort data
export interface Sortable {
  length: number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}

abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  public sort(): void {
    for (let i: number = 0; i < this.length; i++)
      for (let j: number = 0; j < this.length - i - 1; j++)
        if (this.compare(j, j + 1)) this.swap(j, j + 1);
  }
}

export default Sorter;
