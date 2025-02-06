import { CollectionNumber } from "./classes/Collections/Collection.Numbers";
import { CollectionString } from "./classes/Collections/Collection.String";
import Sorter from "./classes/Sorter";

const data = new CollectionNumber([
  1, 2, 3, 7, 4, 2, 89, 32, 11, 51, 2, 5, 896, 23, 0,
]);

const name = new CollectionString("GiTansHU");

const sortedData = new Sorter(data);
const sortedName = new Sorter(name);
// data before sorting
data.show();
// performing sorting
sortedData.sort();
// data after sorting
data.show();

// data before sorting
name.show();
// performing sorting
sortedName.sort();
// data after sorting
name.show();
