console.log('student manager');

const queenName = "Margrethe";
const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === '' || typeof studentName !== 'string') {
        return "You cannot add an empty string or a number!!"
    }

    // if (class07Students.includes(studentName)) { 
    if (class07Students.indexOf(studentName) !== -1) {
        return "Student " + studentName + " is already in the class";
    }

    if (studentName === queenName) {
        return class07Students.push(studentName);
    }

    if (class07Students.length > 5) {
        return "Cannot add more students to class 07";
    }

    return class07Students.push(studentName);
}

/**
 * Calculates length of array
 * @param {any} inputArray 
 */
function getNumberOfStudents(inputArray) {
    return inputArray.length;
}

console.log(addStudentToClass(1234));
console.log(addStudentToClass('Marco1'));
console.log(addStudentToClass('Marco'));
console.log(addStudentToClass(''));
//console.log('Number of students: ' + getNumberOfStudents());
console.log(addStudentToClass('Marco2'));
console.log(addStudentToClass('Marco3'));
// console.log('Number of students: ' + getNumberOfStudents());
console.log(addStudentToClass('Marco4'));
console.log(addStudentToClass('Marco5'));
console.log(addStudentToClass('Marco6'));
console.log(addStudentToClass(queenName));
console.log(class07Students);
console.log('Number of students: ' + getNumberOfStudents());