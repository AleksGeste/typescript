// Unknown and Never Types

let userInput: unknown;
let userName: string;

// userInput = 5;
userInput = 'Aleks';

// not guarantee to be the string
// error
// userName = userInput;

// but if change unknown to any, there will not be the error
// because any is the most flexible type
// unknown is a bit more restrictive than any

// to avoid error we need to check unknown variable type, first
// if (typeof userInput === 'string') {
//     userName = userInput;
// }

// with unknown, we need extra type check


// never type
// it is type of function which crash the script, basic throw the error or
// never stops as while(true)
// good practise to write that type at the end of that function
function generateError(message: string, code: number):never {
    throw {message: message, errorCode: code}
}

generateError('An error occurred!', 500)



