"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    };
    NumbersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var _a;
        _a = [this.data[rightIdx], this.data[leftIdx]], this.data[leftIdx] = _a[0], this.data[rightIdx] = _a[1];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
