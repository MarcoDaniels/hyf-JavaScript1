const user = {
    name: 'Marco',
    age: 31,
    address: ''
}
console.log(user);

user.name = 'another name';
console.log(user);

user.address = 'Odense';
console.log(user);

const emptyObject = {
    name: null,
    age: null,
    address: {
        street: null,
        zipcode: null
    }
};
console.log(emptyObject);

emptyObject.name = 'temp'
console.log(emptyObject);

emptyObject.age = 20;
emptyObject.address.zipcode = 5000;

console.log(emptyObject);

const somthing = {
    x: 1,
    y: 2,
    z: 4
}
console.log(somthing);

somthing.x = null;

console.log(somthing);
console.log(somthing.x);
delete somthing.x;

console.log(somthing.x);
console.log(somthing);

const dataObject = {
    data: {
        users: [
            {
                name: 'Marco',
                age: 31,
                address: 'Street'
            },
            {
                name: 'Daniel',
                age: 33
            }
        ]
    }
}

console.log(Object.keys(dataObject.data.users[0]));

console.log(dataObject);

if (dataObject.data !== undefined) {
    if (dataObject.data.users !== undefined) {
        const getUsers = dataObject.data.users;
        for(let i = 0; i < getUsers.length; i++) {
            console.log(getUsers[i].name);
            console.log(getUsers[i].age);
        }
    }
}