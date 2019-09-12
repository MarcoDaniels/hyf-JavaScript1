var variables = 1;

function functions() {
    console.log("this is a function");
}
functions();

function printNames(firstName, lastName) {
    console.log(firstName, lastName);
}

let argument = "this is a name";
printNames("last one", argument);

let param = "this is before the function";

function globalScope(param) {
    console.log(param);
    return ["stuff"];
}

//console.log(param);
globalScope("something");
//console.log(param);

function subtraction(a, b) {
    return a - b;
}
// console.log("here", globalScope("this srtring"));
var result = subtraction(2, 2);
console.log(result);
console.log(subtraction(1, 2));

// print values individually
const names = ["adidas", "nike", "puma", "mac", "apple"];
const cities = ["odense", "aarhus", "vejle", "billund"];

/*
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
*/

function printPrettyNames(arrayOfValues) {
    for(let i = 0; i < arrayOfValues.length; i++) {
        console.log(arrayOfValues[i]);
    }
}
printPrettyNames(names);
printPrettyNames(cities);

function sumValuesBy(arrayOfNumbers, value) {
    let result = []
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        //arrayOfNumbers[i] += value;
        result.push(arrayOfNumbers[i] + value);
    }
    //return arrayOfNumbers;
    return result;
}

const values = [1,2,3,4,5];
console.log(values);
console.log(sumValuesBy(values, 2));

console.log(sumValuesBy(3, 2));

function temp(a, b) {
    if (a > b) {
        return "it is true";
    }
    return "it is not true";
}

console.log(temp(1, 3))

function min(a, b) {
    return a < b;
}

let variable1 = 2;
const isTwo = variable1 == 2;
console.log(isTwo);

console.log(min(1, 2));
console.log(min(2, 1));

// From here!

const arrayOfNumbers = [1, 2, 3, 4];

function isEven(a) {
    return a % 2 === 0;
}

function process(arrayOfValues) {
    for(let i = 0; i < arrayOfValues.length; i++) {
        let value = arrayOfValues[i];

        if (isEven(value)) {
            console.log(value + " is even!");
        }
        
        if (arrayOfValues[i] % 2 === 0) {
            console.log(arrayOfValues[i] + " is also even!");
        }
    }
}


process(arrayOfNumbers);