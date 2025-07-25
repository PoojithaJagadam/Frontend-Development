console.log("Conditional Statements");

let age=12;
let grace =2;

// Arithmetic Operators
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);
console.log(age++);
console.log(age--);
console.log(++age);
console.log(--age);


/*

Multiline comment

*/

// Assignment Operators +=,-=,*= etc 
// age+=grace;
if((age)==18) {
    console.log("You can drive");
}
else if(age<=0){
    console.log("Impossible");
}
else {
    console.log("No you cant");
}
// Comparison Operators <=, >=, !=, == ? (ternary)  ===(check type and value) ==(check data or value)etc 

// == and ===

// > "3" == 3
// true
// > 3 === "3
// 3 === "3
//       ^^

// Uncaught SyntaxError: Invalid or unexpected token
// > 3 === "3"
// false
// > "3" === "3"
// true
// > "3" == "3"
// true

// ternary operator
a=6;
b= 7;
let c=a>b?(a-b): (b-a);
console.log(c);