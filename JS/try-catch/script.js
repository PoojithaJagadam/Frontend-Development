let a= prompt("Enter a number1");

let b= prompt("Enter a number2");

let sum=a+b;
console.log(sum); //output: 1 2 = 12 bcoz by default input is accepted as strings so

if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Input type is not allowed");
}

try {
let sum1= parseInt(a) + parseInt(b); //it converts string into integer
console.log(sum1 * x);
}
catch(error) {
    console.log("We caught an error");
}
finally {
    console.log("This is finally block");
}

