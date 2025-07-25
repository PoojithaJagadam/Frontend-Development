// faulty Calculator
/*
    This faulty Calculator does following
    1.It takes tw numbers as input
    2.It perform operations as follows:

    + --->-
    * ---> +
    - ---> /
    / ---> **

    It perform wrong operation 10% of the times
*/

let a=prompt("Enter number:");
let c=prompt("Enter operation: ");
let b=prompt("Enter number2");
let rand=Math.random();
console.log(rand);
let obj= {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

// eval() function will compute or evaluate the result 
if(rand>0.1) {
    
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}