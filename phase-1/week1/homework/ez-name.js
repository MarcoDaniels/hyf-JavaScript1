console.log('eazy name');

const firstWords = ["Eazy", "Awesome", "Cheese", "Train", "Bottle", "Code", "Key", "Phone", "Glasses", "Hack"];
const secondWords = ["Umbrella", "Systems", "Work", "Digital", "Super", "Batman", "Window", "Apple", "Track", "Jacket"];

const randomNumberFirst = Math.floor(Math.random() * 10) + 0
const randomNumberSecond = Math.floor(Math.random() * 10) + 0

let startupName = firstWords[randomNumberFirst] + " " + secondWords[randomNumberSecond];

console.log("The startup '" + startupName + "' contains " + startupName.length + " characters");