console.log("loops");

let index = 0;
index++; // the same as: index = index + 1 // the same as: index += 1


for(let i = 0; i <= 9; i += 3) {
    // console.log("it's alive " + i);
}

for(let i = 10; i >= 0; i--) {
    // console.log("it's also alive " + i);
}

/*
for(let i = 0; i < 2; i++) {
    console.log("the value of i: " + i);
    for(let j = 0; j < 2; j++) {
        if (j === i) {
            console.log("they are the same");
        }
        console.log("the value of j: " + j);
    }
}
*/

// console.log("outside");

const names = ["nike", "adidas", "apple", "android"];
console.log(names);
console.log(names.length);
console.log(names[1]);

let temp = ["odense"]
let notEmpty = ["first element"]

console.log(notEmpty);
for(let i = 0; i < names.length; i++) {
    //console.log(i);
    console.log(names[i]);
    temp.push(names[i]);
    notEmpty[i] = names[i];
    console.log(notEmpty);
}
console.log(temp);
// console.log(names);
// console.log(notEmpty);

let sumOf10FirstNumbers = 0;

for(let i = 0; i <= 10; i++) {
    sumOf10FirstNumbers += i;
    // sumOf10FirstNumbers = sumOf10FirstNumbers + i;
    console.log(sumOf10FirstNumbers);
}
console.log(sumOf10FirstNumbers);



const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
for(let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2; // the same as numbers[i] = numbers[i] * 2;
}
console.log(numbers);
for(let i = 0; i < numbers.length; i++) {
    numbers[i] /= 2; // the same as numbers[i] = numbers[i] / 2;
}
console.log(numbers);

const mixed = [1, "two", 3, "four", true];
let sumofallnumbers = 0;
console.log(mixed);
for(let i = 0; i < mixed.length; i++) {
    //console.log(typeof mixed[i]);
    if (typeof mixed[i] === "number") {
        sumofallnumbers += mixed[i];
    }
}
console.log(sumofallnumbers);

const numbersAgain = [];
for(let i = 1; i <= 100; i++) {
    numbersAgain.push("name" + i);
}
console.log(numbersAgain);

const thisIsAString = "Marco Martins";
console.log(thisIsAString[2]);
for(let i = 0; i < thisIsAString.length; i++) {
    console.log(thisIsAString[i]);
}