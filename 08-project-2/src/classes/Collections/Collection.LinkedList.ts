import Sorter from "../Sorter";

class Node {
  public value: number;
  public next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  public add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = node;
  }

  public get length(): number {
    let len = 0;
    let tail = this.head;
    if (!tail) return len;
    while (tail?.next) {
      len++;
      tail = tail.next;
    }
    return len;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Linked list is empty");
    }

    let node: Node = this.head;
    let count = 0;
    while (node?.next) {
      if (index === count) return node;
      node = node.next;
      count++;
    }
    throw new Error("index out of bound");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("list is empty");
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // swapping node is complecated process, so we're swapping node values
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = temp;
  }

  print(): void {
    if (!this.head) return;

    let curr: Node | null = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
    console.log("null");
  }
}
