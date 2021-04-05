const announcement = 'Hello World!';

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();
``;

// Uncalled functions,

function flipCoin() {
    // Meant to be Math.random()
    return Math.random < 0.5;
    // Operator '<' cannot be applied to types '() => number' and 'number'.
}

// Logic Error

const value = Math.random() < 0.5 ? 'a' : 'b';
if (value !== 'a') {
    // ...
} else if (value === 'b') {
    // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
    // Oops, unreachable
}

//Explicit Types

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);

    //Argument of type 'string' is not assignable to parameter of type 'Date'.
}

greet('Maddison', Date());

// Infer

let hello: string | number = 'hi';
hello = 5;

// Parameter type annotation
function greetMe(name: string) {
    console.log('Hello, ' + name.toUpperCase() + '!!');

    // Argument of type 'number' is not assignable to parameter of type 'string'.
}

greetMe(4);

// Object Types

function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

/* In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it. */

function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    // Object is possibly 'undefined'.
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}

/* Union Types */

/* Working with Union Types
It’s easy to provide a value matching a union type - simply provide a type matching any of the union’s members. If you have a value of a union type, how do you work with it?

TypeScript will only allow you to do things with the union if that thing is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string: */

function printId(id: number | string) {
    console.log(id.toUpperCase()); // Wrong
    // Property 'toUpperCase' does not exist on type 'string | number'.
    //   Property 'toUpperCase' does not exist on type 'number'.

    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// Interfaces and Type Aliases

interface Human {
    name: string;
    age: number;
}

interface Human {
    country: string;
}

const printHuman = (person: Human) => {
    console.log(person.name);
};

type Animal = {
    name: string;
};

// type Animal = {
//     age: number;
// };
// Error: Duplicate identifier 'Animal'.

type Bear = Animal & {
    honey: boolean;
};

// Literal Types

let changingString = 'Hello World';
changingString = 'Ola Mundo';
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
// ^ = let changingString: string

const constantString = 'hello';
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;

// Literal Inference

const obj = { counter: 0 };
if (true) {
    obj.counter = 1;
}

const req = { url: 'https://example.com', method: 'GET' } as const;

console.log(req.url, req.method);
