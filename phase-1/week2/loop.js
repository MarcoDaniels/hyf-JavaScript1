console.log('loop');

// global scope
const globalVariable = 2;

function innerFunction() {
    console.log(globalVariable);
    // local scope
    const localVariable = 'local';
    console.log(localVariable);
}

innerFunction();

const localVariable = 2;
console.log(globalVariable);
console.log(localVariable);

console.log('for loop');
for (let i = 0; i < 10; i++) {
    console.log(i);
}

const temporaryArray = ['first', 'second', 'third', 'fourth']
console.log(temporaryArray);

for (let i = 0; i < temporaryArray.length; i++) {
    console.log(i);
    console.log(temporaryArray[i]);
}

let otherArray = [];
console.log(otherArray);
for (let i = 1; i <= 10; i++) {
    otherArray.push(i);
    // otherArray[i] = i + 2;
}
console.log(otherArray);

for (let i = 0; i < otherArray.length; i+=5) {
    console.log(otherArray[i]);
}

let name = 'Marco Martins';
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

let i = 0;
while (i < otherArray.length) {
    console.log(otherArray[i]);
    i++;
}

let total = 0;
for (let i = 0; i < otherArray.length; i++) {
    total += otherArray[i];
}
console.log('the sum of the values: ' + otherArray + ' is: ' + total);