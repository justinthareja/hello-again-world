Array.prototype.flatten = function flatten() {
    return this.reduce((result, cur) => [...result, ...cur], []);
}

var test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(test.flatten())

