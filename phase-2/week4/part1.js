console.log('we are going to solve homework');

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here

// remove value of nameToRemove from names
console.log(names);

// for loop on the array -> values of the array
 for (let index = 0; index < names.length; index++) {
    // compare the values with nameToArray
    // console.log(names[i]);

    // if the names match -> remove the item
    if (names[index] === nameToRemove) {
        console.log("remove item: " + names[index]);
        // index is the item to remove
        // 1 is the number of items from index to remove
        // if we dont give a number of items, it removes everything left
        names.splice(index, 1);
    }
 }

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']