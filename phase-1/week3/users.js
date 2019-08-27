console.log('users');

const users = [
    {
        name: 'User 1',
        age: 28,
        address: 'Street 1',
        sex: 'male'
    },
    {
        name: 'User 2',
        age: 30,
        address: 'Street 2',
        sex: 'female'
    },
    {
        name: 'User 3',
        age: 31,
        address: 'Street 3',
        sex: 'male'
    },
    {
        name: 'User 4',
        age: 31,
        address: 'Street 4',
        gender: 'male'
    }
];

 /**
  * 
  * Expected result: The user {name} is {age} years old and lives in {address}.
  * 
  * @param {array of objects} usersObject  
  */ 
function returnsUsersDataAsArrayOfString(usersObject) {
    let arrayOfStrings = [];
    // console.log(usersObject);
    for(let i = 0; i < usersObject.length; i++) {
        // console.log(usersObject[i]);
        if (usersObject[i].name && usersObject[i].age && usersObject[i].address && usersObject[i].sex) {
            const genderP = usersObject[i].sex === 'male' ? 'he' : 'she';
            /* // same as above
            if (usersObject[i].sex === 'male') {
                genderP = 'he';
            } else {
                genderP = 'she';
            }
            */

            const userName = "The user " + usersObject[i].name;
            const userGender = " " + genderP ;

            const resultString = userName + userGender + 
            " is " + usersObject[i].age + 
            " years old, and live in " + usersObject[i].address + ".";

            arrayOfStrings.push(resultString);
        }
    }
    return arrayOfStrings;
}

const result = returnsUsersDataAsArrayOfString(users); 
// console.log(result[0]);
// console.log(result[1]);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}

const temporary = ['test', 'test1'];