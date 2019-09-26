console.log('this is b');

function thisIsB() {
    console.log('function B');
}

const temp = [1, 2];

function b() {
    temp.push(1);
    //throw 'hello';
    console.log('b is executed');
    return 'b';
}

const newObject = {
    name: 'my name',
    age: 21
}

console.log(newObject);

b();

const things = { favourite: 'computers', sports: 'running to class' };
const fav = { favourite: 'computers', sports: 'running to class' }.favourite;

console.log(things);
console.log(fav);