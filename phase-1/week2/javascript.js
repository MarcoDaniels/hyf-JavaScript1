console.log('week 2');

let result = 100;

if (result > 100) {
    console.log('bigger');
} else if (result === 100) {
    console.log('equal');
} else if (result === 90) {
    console.log('its 90');
} else if (result > 101) {
    // not here!
}

console.log('here');

let aNumber = 100;
let aString = 'this is my string';

if (aNumber === 100) {
    console.log('equals to 100');
}

if (aNumber === 100) {
    if (aString === 'this is my string') {
        console.log('they are true');
    }
}

if (aNumber === 100 && aString === 'this is my string') {
    console.log('they are really true');
} else {
    console.log('nope');
}

let x = 1;
let y = 2;
let z = 3;

if (x === 1 && (y === 2 || z === 4)) {
    console.log('yes!');
}

const thisIsFalse = true;
const iDontKnow = true;

if (thisIsFalse & iDontKnow) {
    console.log('its true')
} else {
    console.log('its not true');
}

console.log(typeof 100);


function multiplication(number1, number2) {
    let result = number1 * number2;
    
    return "the result is " + result;
}

console.log(multiplication(2,2));

function div(number1, number2) {
    console.log("the result is " + number1 / number2);
}

div(8, 2);

const divi = multiplication(6, 2);

const firstName = 'Marco';
const lastName = 'Martins';

function printFullName(firstName, lastName) {
    firstName = firstName.toUpperCase();
    
    console.log(firstName + " " + lastName);
    
    console.log('its here');
    return;
    console.log('not here');
}

const result1 = printFullName(firstName, lastName);

console.log("the result is: " + result1);

function functionWithoutParams() {
    return 'this is cool';
}

console.log(functionWithoutParams());
