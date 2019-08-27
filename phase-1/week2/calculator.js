console.log('calculator');

// this is comment
/**
 * this is also a comment
*/


/*
Calculator function
It should take in 3 arguments
The first argument should be the action 
(sum, subtraction, multiplication, divison)
The last 2 arguments should be the number to execute the action

It should return the result
*/

function calculator(action, number1, number2) {
    // console.log('the action is ' + action);
    let result = 0;
    if (action === 'sum' || action === 'addition' || action === '+') {
        result = number1 + number2;
    } else if (action === 'subtraction' || action === 'sub') {
        result = number1 - number2;
    } else if (action === 'multiplication' || action === 'mult') {
        result = number1 * number2;
    } else if (action === 'division' || action === 'div') {
        result = number1 / number2;
    } else {
        console.error('action ' + action + ' is not allowed');
    }
    return result;
}

console.log(calculator('sum', 1, 1));
console.log(calculator('subtraction', 1, 1));
console.log(calculator('sub', 1, 1));
console.log(calculator('multiplication', 2, 2));
console.log(calculator('division', 8, 2));
console.log(calculator('power', 2, 2));
console.log(calculator('+', 2, 2));