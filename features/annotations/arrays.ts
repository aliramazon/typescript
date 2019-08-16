export {};
const carMakers = ['ford', 'toyoto', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0]; // now car has type of car
// prevent incompatible values
carMakers.push(4); // does not work as 4 is string type and carMakes is array of strings

// Help with map
carMakers.map(
    (car: string): string => {
        return car;
    }
);

// Flexible types;
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('November'); // it works as we specified the type as Date or string
