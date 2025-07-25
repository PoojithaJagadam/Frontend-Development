let arr1=[1,2,3,4,5];
// let newArr = [];
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     newArr.push(element**2);
    
// }
// console.log(newArr);

// optimization of above
// map() method creates and anew ARray and performs same operation on each element
/*let newArr =arr.map((e)=> {
    return e**3;
})
console.log(newArr); */

//filter() method
/*let greater=((e)=> {
    return (e>2)? true: false;
});
console.log(arr1.filter(greater)); //output: (3) [3, 4, 5]
*/
//reduce()
let add=((a,b)=> {
    return a+b;
});
console.log(arr1.reduce(add)); //outpt: 15

/*arr= "pooji"
'pooji'
Array.from(arr) //returns each character
(5) ['p', 'o', 'o', 'j', 'i'] */


