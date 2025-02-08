import { LinkedList } from "./classes/Collections/Collection.LinkedList";
import { CollectionNumber } from "./classes/Collections/Collection.Numbers";
import { CollectionString } from "./classes/Collections/Collection.String";
import Sorter from "./classes/Sorter";

/**
 * Below is the code for sorting number array
 */
const data = new CollectionNumber([
  1, 2, 3, 7, 4, 2, 89, 32, 11, 51, 2, 5, 896, 23, 0,
]);
const sortedData = new Sorter(data);
// data before sorting
data.show();
// performing sorting
sortedData.sort();
// data after sorting
data.show();

/**
 * Below is the code for sorting string
 */
const name = new CollectionString("GiTansHU");
const sortedName = new Sorter(name);
// data before sorting
name.show();
// performing sorting
sortedName.sort();
// data after sorting
name.show();

/**
 * Below is the code for sorting linked list
 */
const list = new LinkedList();
list.add(56);
list.add(-5);
list.add(22);
list.add(0);

const sortedList = new Sorter(list);
list.print();
