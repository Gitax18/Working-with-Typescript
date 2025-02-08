import Sorter from "../Sorter";

export class CollectionNumber extends Sorter {
  data: number[];
  length: number;

  constructor(data: number[]) {
    super();
    this.data = data;
    this.length = this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    let temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }

  public show(): void {
    console.log("Sorted Data: " + this.data);
  }
}
