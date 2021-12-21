console.log("Core Typescript Types");

// Core primitive types

// numbers, string, boolean

// func which take parameters with types
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // check type of number1
  console.log("Type of n1: ", typeof n1);

  // javascript approach, which is not good
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!");
  // }

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// const number1 = 5;
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

// const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);

add(number1, number2, printResult, resultPhrase);

// string
const str = "Hello world";
