import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1, 2, -4, 3, -4, -3, -6, 10, 8, 10]);
const sorter = new Sorter(numbersCollection);

sorter.sort();
console.log(numbersCollection.data);
