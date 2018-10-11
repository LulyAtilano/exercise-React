/*const square = function(x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(4));*/

const name = 'Niurka Smith';
const getFullName = (name) => name.split(' ')[0];

console.log(getFullName(name));

const getFullName2 = (name) => {
    return name.split(' ')[0];
};

console.log(getFullName2(name));