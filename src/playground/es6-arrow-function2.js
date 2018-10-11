//arguments object - no longer bound with arrow functions

/*const add = function(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(66, 1, 1001));*/

//this keyword - no longer bound with arrow functions

const user = {
    name: 'Andrew',
    cities: ['Philadelphia','New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());