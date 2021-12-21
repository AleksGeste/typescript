// Union Types
// allow assign multiple types for func parameter

// Literal Types
// allow defined specific string which should be passed as argument

function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text') {

    let result;
    if (typeof input1 === 'number'
        && typeof input2 === 'number'
        || resultConversion === 'as-number') {

        // result = parseFloat(input1) + parseFloat(input2)
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
