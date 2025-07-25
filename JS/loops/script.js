
// loops used when repetive works occurs
// for loop
for(let i=0;i<10;i++) {
    console.log(i);
}

// for in loop
// for(key in object)
let o={
    "name":"poojitha",
    "age": 5,
    "no": 1234.
}
for(const key in o) {
    console.log(key, o[key]);
}

// for of
// for variable of iterable
for(const c of "poojitha") {
    console.log(c);
}

// while loop
// while(condition) { ...
// }
let i=5;
while(i>0) {
    console.log(i);
    i--;
}
// do while
let p=0;
do {
    console.log(p);
    p++;
} while (p<6);