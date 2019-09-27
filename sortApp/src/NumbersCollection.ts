export class NumbersCollection {
    constructor(public data: number[]) {}

    get length(): number {
        return this.data.length;
    }

    compary(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx] > this.data[rightIdx];
    }

    swap(leftIdx: number, rightIdx: number): void {
        [this.data[leftIdx], this.data[rightIdx]] = [this.data[rightIdx], this.data[leftIdx]];
    }
}
