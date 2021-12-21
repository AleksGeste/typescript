// Type Aliases and Custom Types

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor) {

    let result;
    if (typeof input1 === 'number'
        && typeof input2 === 'number'
        || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedNumbers = combine(30, 20, 'as-number')
console.log(combinedNumbers)

const combinedNumbersAsText = combine('30', '20', 'as-number')
console.log(combinedNumbersAsText)

const combinedWords = combine('Hello', 'Word', 'as-text')
console.log(combinedWords)

// Aliases with objects
type User = { name: string; age: number };

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}

const player: User = {
    name: 'Aleks',
    age: 38
}

greet(player)
console.log(`You are ${isOlder(player, 40) ? 'old': 'young'} man! `)
