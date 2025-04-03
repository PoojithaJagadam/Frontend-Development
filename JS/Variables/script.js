console.log("helloooo");


// var has global scope whereas let and const have block scope i.e we can access within the block

// var can be start with letter , underscore and dollar
// var cannot be start with digit
// variable names are case sensitive in js

var a= 5;
// We can change the data stored in variables while using var
a=a+1;
var b= 6;
var c="Pooji";
var _l=" Hey";
// var 55a="Raghava";  (Not alloowed we encounter syntax error)
// console.log(55a);  
console.log(_l);
console.log(a + b+ 8);
console.log(typeof a,typeof b,typeof c);

// using var we can add directly integer and flaoting point numbers without any datatype exceptions
var d= 5.555;
console.log(a + d);

// const
// we cannot modify data stored in const variables
// local or block scope
const a1=6;
// we cannot modify const variable value
// a1=a+1;  (here we will encounter Assignment to constant variable error)
console.log(a1);


// let
// when we write let outside the block it will have global scope otherwise local scope
let a2=10;
{
    let b2=5;
    console.log(b2);
    console.log(a2);
}
// console.log(b2);  Not allowed due to scope i.e ReferenceError

// data types : 2 types
// primitive data types (7) : null (nothing),number (numbers), string (encountered in " "), symbol , undefined (not defined), boolean (true or false) and big int (big numbers)

let x="Pooji";
let y= 17;
let z= 3.55;
const p=true;
let q=undefined;
let r=null; 
// null type is object and it is a primitive datatype
console.log(x, y, z, p, q, r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

// In js object is key value pairs combination
let o = {
    "name": "Poojitha",
    "job code": 1234,
    "is_good": true,
}
console.log(o);
o.salary="10crores";
console.log(o.salary);
// we can update the data
o.salary="100crores";
console.log(o.salary);


