const drink = {
    color: 'brown',
    corbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['white', true, 50];

const carSpecs: [number, number] = [400, 3354]; // it does not give any idea what the numbers are?
