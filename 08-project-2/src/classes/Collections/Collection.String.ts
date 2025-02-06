import { Sortable } from "../Sorter";

export class CollectionString implements Sortable {
  data: string;
  length: number;

  constructor(data: string) {
    this.data = data;
    this.length = this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    //  converting string to array of characters
    const characters = this.data.split("");
    // swap logic
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    // converting array back to string
    this.data = characters.join("");
  }

  public show(): void {
    console.log("Sorted Data: " + this.data);
  }
}
