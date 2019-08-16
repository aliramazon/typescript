// Interfaces can have any types: primitive types such as string, number and Complex types such as Date as well
interface Reportable {
    summary(): string;
}
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'White',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
