//Strings are immutable
let a="Pooji";
let b1= 'Poojitha';
let b2= new String("Hello");  // new instance will be created
console.log(a[0]);


console.log("hi 'Hello'");
console.log('Hello  \'Welcome\'');
console.log(a.length);

let real_name="Pooji";
let friend="Poojitha";
console.log("Her name is "+real_name+" and her friends name is "+friend);
console.log(`Her name is $(real_name)`)

console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.length);
console.log(a.slice(0,4));

console.log(a.replace("Po","Rj"));
console.log(a.concat(a));
console.log(a.concat(a, "Lavanya","hello"));

let b=" helloo  ";
console.log(b.trim())
console.log(b.startsWith(' '));
console.log(a.endsWith('i'));