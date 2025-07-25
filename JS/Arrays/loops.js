let a= [1,2,7,4,8];

// for(let i=0;i<a.length; i++) {
//     console.log(a[i]);
// }

/*
a.forEach((value, index, arr)=> {
    console.log(value, index, arr); output : 1 0 (5) [1, 2, 7, 4, 8]
     2 1 (5) [1, 2, 7, 4, 8]
     7 2 (5) [1, 2, 7, 4, 8]
     4 3 (5) [1, 2, 7, 4, 8]
     8 4 (5) [1, 2, 7, 4, 8]
})  */

/* forin loop
let object = {
    a:1,
    b:2,
    c:3,
};
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
        
    }
} */

/* forof loop
for (const value of a) {
    console.log(value);
} */
