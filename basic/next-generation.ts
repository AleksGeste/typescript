console.log('Hi there ...')

const userName = 'Name';
// userName = 'Alesja';

let age = 38;
console.log(age);
age = 39;

// simple function
const addSimple = function addFunction(a: number, b: number) {
    return a + b;
}
console.log(addSimple(2, 3));

// arrow function
const addArrow = (a: number, b: number) => {
    return a + b;
}
console.log(addArrow(2, 3));

// arrow function with one expression
const addArrow1 = (a: number, b: number) => a + b;
console.log(addArrow1(2, 3));

// arrow function with one parameter
// this works for TS but no any significant changes with previous example
// const addArrow2 = (a: number) => console.log(a);

// this works only with JS, for TS we need to modify it
// const addArrow2 = a => console.log(a);

// modification, but it is looks more difficult to understand
const addArrow2: (a: number,) => void = a => console.log(a);
addArrow2(2);

// but that approach  a => console.log(a) we can use un addEventListener(),
// where we will use it like this
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event))
}

// functions default parameters
function subtractNumbers(a: number, b: number = 3) {
    return a - b;
}

console.log(`Subtract numbers with 2 parameters: ${subtractNumbers(5, 1)}`);
console.log(`Subtract numbers with 1 parameters: ${subtractNumbers(5)}`);
// but keep in mind that default parameters should be assigned from the right to left

// Spread operator
const hobbies = ['Computer game', 'Swimming', 'Cooking'];
const favoritesHobbies = ['Reading', ...hobbies];
favoritesHobbies.push(...hobbies)
console.log(favoritesHobbies);

// ... provide list of value from the array, which is very useful if we want
// for  example add one array to another like above or display them line below
console.log(...favoritesHobbies);

// Also Spread operator is used to create REAL COPY of an Object
// example
const person = {
    personName: 'Aleks',
    personAge: 38
}

const aleksCopy = {...person}
// const aleksCopy = person

console.log(person)
console.log(aleksCopy)

aleksCopy.personName = 'Aleksandrs';

console.log(person)
console.log(aleksCopy)

// Rest Parameters
const addRest = (...numbers: number[]): number => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}
const addNum = addRest(1, 2, 3, 4, 5)
console.log(addNum)

const addNum2 = addRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
console.log(addNum2)

const arNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3, 4, 5, 6, 7]
const addNum3 = addRest(...arNum)
console.log(addNum3)

// Array and Object Destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
// const hobby3 = hobbies[3];

// Ok, but that is old school, tho

// new stile is the following

// Destructure === pull elements out of the array
const [hobby1, hobby2, ...otherHobbies] = hobbies;
console.log(hobbies)
console.log(hobby1)
console.log(hobby2)
console.log(otherHobbies)

// Object Destructuring
const {personName, personAge} = person;
console.log(personName, personAge)

// Also, we can override pulled out variables
const {personName: someoneName, personAge: someoneAge} = person;
console.log(someoneName, someoneAge)