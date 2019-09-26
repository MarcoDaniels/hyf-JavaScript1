const user = {
    name: 'Emil',
    classes: ['Javascript 1', 'Javascript 2'],
    hobbies: {
      favourite: 'computers',
      sports: 'running to class'
    }
  }

  function graduatedClass(student, className) {
    //console.log('we are here!!!');
    if (student.classes.includes(className)) {
        console.log('student already has the class ' + className);
        return;
    }
  
    student.classes.push(className)
  }
  
  console.log(user)
  graduatedClass(user, 'HTML')
  graduatedClass(user, 'HTML')

const family = {
    name: 'John',
    brothers: [
        {
            name: 'Tim'
        },
        {
            name: 'Ron'
        }
    ]
}

console.log(family);
console.log(family.name);
console.log(family.brothers.push({name: 'Marco'}));
console.log(family);

const newBabyBrother = {name: 'Marco'};

family.brothers.push(newBabyBrother);
console.log(family);





const students = [];
function addStudent(student) {
    if (student.name == null || typeof student.name !== 'string') 
        return 'Error'
    if (student.age == null || typeof student.age !== "number") 
        return 'Error'

    students.push(student)
}

const temp = {
    name: 'new student',
    age: 21
};

console.log(addStudent(temp));
console.log(students);

const arrNumbers = [1, 2, 3, 4];
console.log(arrNumbers[2]);

const objPeople = {
    name: 'Marco'
};

//console.log(objPeople.name);
//console.log(objPeople['name']);

function getUser(name, age) {
    return {
        name: name,
        age
    }
}

const thisUser = getUser('Marco', 31);
console.log(thisUser);

const name = 'Tim';
const age = 20;
const newPerson = {
    name,
    age
}

console.log(newPerson);