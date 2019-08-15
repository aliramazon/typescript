// :number is type annotations. If we replace 5 with other values, we get error.
const apples: number = 5;

// The same with if we use let and re assign the variable to different type.
let oranges: number = 5; // oranges = [] does not work.

let speed: string = 'fast'; // speed = 10 does not work

let nothingMuch: null = null;

// Build in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let boolenas: boolean[] = [true, false];

// Classess

class Car {}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const cordinates: { x: number; y: number } = JSON.parse(json);
console.log(cordinates);
