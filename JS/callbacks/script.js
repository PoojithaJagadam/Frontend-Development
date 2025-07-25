// callbacks are used to handle the asynchronous code

// a function is passed as an argument which was executed later
function sum(callback) {
    console.log("Start");
    setTimeout(callback,2000);
}

let a=5;
let b=3;
function sub() {
    console.log("hiiii");
}
sum(sub);