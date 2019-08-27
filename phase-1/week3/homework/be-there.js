console.log('be there');

function calculateTime(speed, distance) {
    // time = distance / speed
    // hours = km / kmPhour

    const time = distance / speed;

    const hours = Math.floor(time);
    const minutes = Math.floor((time - hours) * 60);

    return hours + ' hours and ' + minutes + ' minutes';
}

const speed = 50;
const destinationDistance = 432;
const travelTime = calculateTime(speed, destinationDistance);

console.log(travelTime);