// typeof type guards

function padLeft(padding: number | string, input: string): string {
    // return new Array(padding + 1).join(' ') + input;
    // throw new Error('Not implemented yet!');

    if (typeof padding === 'number') {
        return new Array(padding + 1).join(' ') + input;
    }
    return padding + input;
}

/* padLeft returns from within its first if block. TypeScript was able to analyze this code and see that the rest of the body (return padding + input;) is unreachable in the case where padding is a number. As a result, it was able to remove number from the type of padding (narrowing from string | number to string) for the rest of the function.

This analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments. When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point. */

function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                //   Object is possibly 'null'.
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        } else {
            // do nothing
        }
    }
}
printAll(null);

// instanceof Narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        //              ^ = (parameter) x: Date
    } else {
        console.log(x.toUpperCase());
        //            ^ = (parameter) x: string
    }
}

// Assignments

let x = Math.random() < 0.5 ? 10 : 'hello world!';
//  ^ = let x: string | number
x = 1;

console.log(x);
// ^ = let x: number
x = 'goodbye!';

console.log(x);
// ^ = let x: string

x = true;
//Type 'boolean' is not assignable to type 'string | number'

// Type Predicates

interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.

const getSmallPet = (): Fish | Bird => {
    if (Math.random() > 0.5) return { swim: () => 'swim' };
    return { fly: () => 'fly' };
};
let pet = getSmallPet();

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

// Discriminated unions
// interface Shape {
//     kind: 'circle' | 'square';
//     radius?: number;
//     sideLength?: number;
// } // Typescript does not know radius or sideLength are present based on the kind property

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
        //   Object is possibly 'undefined'.
    }
}
