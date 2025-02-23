class CollectionOfNumber {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class CollectionOfString {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

// Imagine building different classes for different datatypes. To solve this redundency we can use generics

class CollectionOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const nums = new CollectionOfAnything<number>([
  1, 2, 4, 3, 2, 5, 6, 4, 23, 53, 12, 54, 86, 452, 2345, 75435, 243532,
]);
console.log(nums.get(5));
console.log(nums.get(2));
console.log(nums.get(1));

const strs = new CollectionOfAnything<string>([
  "abc",
  "d",
  "ef",
  "ghi",
  "jkl",
  "m",
  "n",
  "opq",
]);
console.log(strs.get(5));
console.log(strs.get(2));
console.log(strs.get(1));
