import { CollectionNumber } from "./classes/Collections/Collection.Numbers";
import Sorter from "./classes/Sorter";

const data = new CollectionNumber([
  1, 2, 3, 7, 4, 2, 89, 32, 11, 51, 2, 5, 896, 23, 0,
]);

const SortedData = new Sorter(data);
SortedData.show();
