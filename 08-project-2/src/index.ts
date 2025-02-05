type Collection = number[] | string[];
type Member = number | string;

class Sorter {
  collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
    this.sort();
  }

  private swap(indice1: number, indice2: number) {
    let temporary: Member = this.collection[indice1];
    this.collection[indice1] = this.collection[indice2];
    this.collection[indice2] = temporary;
  }

  private sort(): void {
    for (let i: number = 0; i < this.collection.length; i++)
      for (let j: number = 0; j < this.collection.length - i - 1; j++)
        if (this.collection[j] > this.collection[j + 1]) this.swap(j, j + 1);
  }

  public show(): void {
    console.log("Sorted Data: " + this.collection);
  }
}

const data: Collection = [13, 9, 57, 34, 17, 75, 3];

const SortedData = new Sorter(data);
SortedData.show();
