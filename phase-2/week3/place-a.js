console.log('this is a');

function thisIsA() {
    console.log('function A');
    thisIsB();
}
function a() {
    // add to call stack
    console.log('a is executed');
    b();

    console.log('a is still executed');
    return 'a';
    // remove from call stack
}