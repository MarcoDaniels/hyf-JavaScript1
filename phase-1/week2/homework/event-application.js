console.log('event application');

// https://www.w3schools.com/js/js_date_methods.asp
function getEventWeekday(day) {
    const today = new Date();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const eventDate = today.getDay() + (day % 7);

    return week[eventDate];
}

// what happens when  getEventWeekday(12) ?!
console.log('The event is ' + getEventWeekday(2));

console.log('The event is ' + getEventWeekday(12));
console.log("\n");