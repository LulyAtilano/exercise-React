var nameVar = "Andrew";
//console.log('nameVar', nameVar);

let nameLet = 'Jen';
//console.log('nameLet', nameLet);

const nameConst = 'Frank';
//console.log('nameConst',nameConst);

//Block scoping
const fullName = 'Maria Atilano';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);