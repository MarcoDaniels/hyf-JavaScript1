console.log('objects');

let user = {
    name: 'John',
    age: 24,
    address: 'Street'
};

console.log(user);
console.log(user.name);
console.log(user['age']);

let arrayOfNumbers = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday'
]

let users = [
    {
        name: 'John',
        age: 24
    },
    {
        name: 'Marco',
        age: 31
    }
];

console.log(users);
console.log(users[0]);
console.log(users[0].name);

console.log('');

const monday = 'Monday';

let arrayOfWeekdays = [
    'Sunday', 
    monday, 
    'Tuesday', 
    'Wednesday'
];

console.log(arrayOfWeekdays);

const john = {
    name: 'John',
    age: 24
};

const marco = {
    name: 'Marco',
    age: 31
};

let usersArray = [john, marco];

console.log(usersArray);
console.log(usersArray[0]);
// console.log(usersArray[0].name);
// console.log(usersArray[1].name);

for (let i = 0; i < usersArray.length; i++) {
    console.log(usersArray[i].name + " " + usersArray[i].age);
}
