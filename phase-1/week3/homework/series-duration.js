console.log('series duration');

const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
];

function calculatePercentage(years) {
    return parseFloat(years * 100 / 80).toFixed(4);
}

function calculateYears(days, hours, minutes) {
    const newHours = hours + (minutes / 60);
    const newDays = days + (newHours / 24);

    const years = (newDays / 365);

    return years;
}

function calculateTimeOfMyLife(seriesObject) {
    let totalTime = 0;

    for (let i = 0; i < seriesObject.length; i++) {
        const time = calculateYears(seriesObject[i].days, seriesObject[i].hours, seriesObject[i].minutes);
        totalTime += time;
        console.log(seriesObject[i].title + " took " + calculatePercentage(time) + "% of my life");
    }

    return totalTime;
}

const totalTime = calculateTimeOfMyLife(seriesDurations);
console.log("In total that is " + calculatePercentage(totalTime) + "% of my life");