// function is a block of code which performs sme specific task 
// reusuability

function greet(name) {
    console.log("Hey " + name + " Good to see you ");
    console.log("Hey " + name + " Glad to meet you ");
    console.log("Hey " + name + " Welcome ");
}

function sum(a,b) {
    return (a+b);
   
}
function summ(a,b, c=3) { //we can give default value
    // return (a+b);
    return a+b+c;
}
result= sum(3,5);
result1= sum(3,3);
result2= summ(3,8);
console.log("Sum is: ", result);
console.log("Sum1 is: ", result1);
console.log("Sum2 is: ", result2);
greet("Pooji");
greet("Poojitha");

// Arrow function (It will store the result in a arguments and return it to the caller)
const func=(x)=> {
    console.log("Arrow function " ,x);
}
func(8);
const func1=(x,y)=> {
    console.log("Arrow function sum is " ,x+y);
}
func1(8,2);
