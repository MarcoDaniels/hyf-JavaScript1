console.log('objects');

const name = 'marco';
var age = 31;
let city = 'Odense';

const user_array_1 = ['marco', 31, 'Odense'];
const user_array_2 = ['Copenhagen', 'daniel', 32];

let users_array = [user_array_1, user_array_2];

console.log(user_array_1);
console.log(user_array_2);
console.log(users_array);

// don't do the thing before this comment!

const userObject = {
    name: 'marco',
    age: 31,
    city: 'Odense'
}

const userObject1 = {
    age: 32,
    city: 'Copenhagen',
    address: 'Street',
    name: 'daniel',
}

const userObject2 = {
    age: 30,
    city: 'Arhus',
    address: '',
    name: 'daniel 2',
    isalive: true
}

console.log(userObject);
console.log(userObject.name);

const usersObject = [userObject2, userObject, userObject1];

console.log(usersObject);

for (let i =0; i < usersObject.length; i++) {
    const address = usersObject[i].address;
    if (address !== undefined && address !== '' && address !== null) {
        console.log("The user: " + usersObject[i].name + " has address " + address );
    }
}

// best case for keys
let anotherObject = {
    name: "",
    age: 21,
    firstName: "",
    last_name: true,
}

console.log(anotherObject);

let newObject = {
    name: 'Marco',
    age: 31,
    address: {
        street: '',
        city: '',
        zipcode: 5000
    }
}

console.log(newObject);

let tmp = {
    noaddress: ''
}
console.log(tmp);
console.log(tmp.address);
// throws an error!
//console.log(tmp.address.zipcode);
