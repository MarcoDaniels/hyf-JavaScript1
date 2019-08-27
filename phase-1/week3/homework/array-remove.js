console.log("array remove");

function removeItems() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomNumber = parseInt(Math.random() * 11);
    
    console.log(numbersArray);
    console.log("number to remove: " + randomNumber);
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] === randomNumber) {
            numbersArray.splice(i, 1);
        }
    }
    console.log(numbersArray);

    return;
}
// removeItems();

function removeItemsPart2() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbersToRemove = 3;
    
    console.log(numbersArray);
    for (let i = 0; i < numbersToRemove; i++) {
        const randomNumber = parseInt(Math.random() * 11);
        console.log("number to remove: " + randomNumber);

        for (let i = 0; i < numbersArray.length; i++) {
            if (numbersArray[i] === randomNumber) {
                numbersArray.splice(i, 1);
            }
        }
    }
    console.log(numbersArray);

    return;
}

removeItemsPart2();