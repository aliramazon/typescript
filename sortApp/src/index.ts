import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

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

console.log('======== LINKED LIST SORTING =========');
const linkedList = new LinkedList();
linkedList.add(-500);
linkedList.add(-3);
linkedList.add(-5);
linkedList.add(5);
linkedList.add(1000);
linkedList.add(1);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
