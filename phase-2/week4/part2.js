const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
// function 
// takes travelInformation object as information as a parameter
function calculateTravelInformation(information) {
    // console.log(information);
    
    // calculate hours and minutes based on speed and distance
    // distance/time = speed
    // time = distance / speed
    let distance = information.destinationDistance;
    let speed = information.speed;

    let time = distance / speed;

    //console.log(time);
    var hours = Math.floor(time);
    //console.log(hours);
    var temporaty = (time - hours) * 60;
    var minutes = parseInt(temporaty);
    //console.log(minutes);

    // retun in format 4 hours and 42 minutes
    return hours + ' hours and ' + minutes +' minutes';
}

const travelTime = calculateTravelInformation(travelInformation);

console.log(travelTime); // 4 hours and 42 minutes
  