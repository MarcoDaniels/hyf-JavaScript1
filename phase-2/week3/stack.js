const weird = {
    name: "It's still me",
    sum: function(a, b) {
        console.log('it does get here');
        return a + b
    }
}

console.log(weird.name);
console.log(weird.sum(1, 2));
console.log(weird);

function a() {
    // add to call stack
    console.log('a is executed');
    b();

    console.log('a is still executed');
    return 'a';
    // remove from call stack
}

function b() {
    //throw 'hello';
    console.log('b is executed');
    throw 'You got an error!';
    return 'b';
}

console.log(a());