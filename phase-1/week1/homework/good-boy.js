console.log('good boy');

const dogYearOfBirth = 2000;
let dogYearFuture = 2020;

let dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    let result = dogYear * 3;
    console.log("Your dog will be " + result + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}
