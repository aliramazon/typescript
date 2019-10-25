// Example of generics with Classes

class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayofAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

const arr = new ArrayofAnything(['a', 'b', 'c']);

// Example of generics with functions

const printStrings = (arr: string[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

const printNumbers = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

const printAnything = <T>(arr: T[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

// Example of generic constraints

class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface printable {
    print(): void;
}

const printHouseOrCars = <T extends printable>(arr: T[]): void => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
};
