const seriesDurations = [
    {
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 10,  
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
        minutes: 4,
    },
    {
        title: 'Breaking Bad',
        days: 1,
        hours: 10,
        minutes: 4,
    }
];

let totalDays = 0;
let totalHours = 0;
let totalMinutes = 0;

const tvShowTime = [];

for (let index = 0; index < seriesDurations.length; index++) {
    //console.log(seriesDurations[index]);

    // this is for the total calculation of all tvshows
    totalDays += seriesDurations[index].days;
    totalHours += seriesDurations[index].hours;
    totalMinutes += seriesDurations[index].minutes;

    // this is for the individual calculation of each TV show
    let inYears = transformsTimeToYears(seriesDurations[index].minutes, seriesDurations[index].hours, seriesDurations[index].days);
 
    const tvShow = {
        title: seriesDurations[index].title,
        total: calculatesPercentage(inYears)
    };
    
    tvShowTime.push(tvShow);
}

//console.log(tvShowTime);
for (let i = 0; i < tvShowTime.length; i++) {
    const title = tvShowTime[i].title;
    const percentage = tvShowTime[i].total;
    console.log(title + ' took ' + percentage + '% of my life');
}

function transformsTimeToYears(minutes, hours, days) {
    let inHours = minutes / 60;
    let inDays = (inHours + hours) / 24;
    let inYears = (inDays + days) / 365;

    return inYears; // return result in years
}

function calculatesPercentage(years) {
    // x - 80
    // 1 - 100
    // we assume 80 is the average lifespan 
    let averageLife = 80;
    const result = (years * 100) / averageLife
    return result.toFixed(3);
}

let totalInYears = transformsTimeToYears(totalMinutes, totalHours, totalDays);
// console.log(totalInYears);

const total = calculatesPercentage(totalInYears);

const output = 'In total that is ' + total + '% of my life';
console.log(output);
//console.log(totalDays);
//console.log(totalHours);
//console.log(totalMinutes);

//let year = 8 / 365; // days to years
//let days = 10 / 24; // hours to days
//let hours = 30 / 60; // minutes to hours