// Function return type

// Typescript smart enough to determine return type of the function accordingly,
// but also we can define it before  { like so ...
// function add(n1: number, n2: number): number {
// but not need it when it is not necessary
function add(n1: number, n2: number) {
    return n1 + n2
}

// void is type of the function when tha function don't have return statement
function printResult(num: number): void {
    console.log('Result is: ' + num)
}

// also, we have undefined return function type, in that case we need to write return;
// at the end of the function

printResult(add(2,4))

let combineVariables;

// pointer to add function
combineVariables = add;
console.log(combineVariables(8,8));

// the problem is, if ...
// combineVariables = 5
// Typescript can't detect it, but on runtime we will have ERROR ...
// app.js:22 Uncaught TypeError: combinedVariables is not a function
// because type of combinedVariables is any so far

// to fix it
// we need define type of the combinedVariables as Function, like so
// let combinedVariables1: Function;
// so now if we will try
// combineVariables1 = 5
// typescript will complain that 5 is not a function
// good, but, it also not complain if we do so
// combinedVariables1 = printResult;
// need to be more precise

// function type
let combineVariables2: (a: number, b: number) => number;
combineVariables2 = add
console.log(combineVariables2(3,4))


// callback function with type
// not good approach because cb is any
function addAndHande(num1: number, num2: number, cb) {
    const result =  num1 + num2;
    cb(result)
}

// good
function addAndHande2(num1: number, num2: number, cb:(num: number) => void ) {
    const result =  num1 + num2;
    cb(result)
}

addAndHande2(10,20, (result) => {
    console.log(result)
})