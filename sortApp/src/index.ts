import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

console.log('======== NUMBERS COLLECTION SORTING =========');
const numbersCollection = new NumbersCollection([1, 2, -4, 5, 12, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

console.log('======== CHARACTERS COLLECTION SORTING =========');
const charsCollection = new CharactersCollection('wehrbfWdRgdbDgxbhZZAassp');
const charsSorter = new Sorter(charsCollection);
charsSorter.sort();
console.log(charsCollection.data);
