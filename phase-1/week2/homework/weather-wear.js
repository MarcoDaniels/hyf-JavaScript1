console.log('weather wear');

function whatToWear(temperature) {
    if (temperature < 10) {
        return "A winter jacket";
    } else if (temperature >= 10 && temperature < 20) {
        return "Something warmish";
    } else {
        return "It is summer in Denmark!"
    }
}

console.log(whatToWear(8));
console.log(whatToWear(18));
console.log(whatToWear(28));