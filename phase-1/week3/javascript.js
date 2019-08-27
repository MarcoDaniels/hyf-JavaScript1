console.log('week 3');

console.log('arrays');

const arrayOfNames = ['A', 'B', 'C', 'D'];

console.log(arrayOfNames);
const lastValueofArray = arrayOfNames.pop();
console.log(lastValueofArray);

console.log("");
const arrayOfNames2 = ['A', 'B', 'C', 'D'];
console.log(arrayOfNames2.shift());
console.log(arrayOfNames2);

console.log("");
const wrongAlphabet = ['B', 'C', 'D'];
console.log('first: ', wrongAlphabet);
wrongAlphabet.unshift('A');
console.log('last', wrongAlphabet);

console.log("");
const pushElements = [3, 4, 4, 5];
pushElements.push(1);

console.log(pushElements);

console.log(pushElements.length);
console.log(pushElements.indexOf(4));


const testingLetters = ['A', 'B', 'C', 'B'];
for (let i = 0; i < testingLetters.length; i++) {
    if (testingLetters[i] === 'B') {
        console.log('B is on index: ' + i);
    }
}

console.log("");

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let tempIndex = fruits.length + 3;
const citrus = fruits.slice(1, tempIndex);

console.log('fruits: ', fruits);
console.log('citrus: ', citrus);

console.log("");

const newFruits = ["Banana", "Orange", "Apple", "Mango", "Avocado"];
newFruits.splice(newFruits.length / 2, 0, "Lemon", "Kiwi")
console.log(newFruits);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array