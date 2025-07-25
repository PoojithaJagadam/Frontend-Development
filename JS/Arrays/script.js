/*
    Arrays are variables that can hold more than one variable
    can be of differnt types
*/

let arr = [1,2, 3, 4, 5]
/*console.log(arr);
console.log(arr.length); //used to find length
// Arrays are mutable and strings are immutable

console.log(arr[0]) //Accessing
console.log(arr[4])
arr[2]= 420; //updating
console.log(arr[2]);
console.log(typeof(arr));  // Array is pf type "object" */


/*Array Methods
console.log(arr.toString()); //Conversts array to string output is: 1,2,3,4,5
console.log(arr.join(" and ")); //it will join " and " after  each element output is: 1 and 2 and 3 and 4 and 5
pop() i.e arr.pop() removes last element
push(ele) i.e arr.push(ele) pushes the elemnet into the array at the last
--> arr.push(7)  output:  (5) [1, 2, 3, 4, 7]
shift(ele) i.e arr.shift(ele) removes the first elemnet in tha arreya and returns it
-->arr.shift(9)  output: (4) [2, 3, 4, 7]
unshift(ele) i.e arr.unshift(ele) adds elemnet at the beginneing of the array and returns new length
-->arr.unshift(8) output:  (5) [8, 2, 3, 4, 7]
delete i.e  delete d[1] delete is the keywprd used to delete the elements in the array 
-->delete arr[2]  output : (5) [8, 2, empty, 4, 7]
concat() --> combine one or more arrays
splice() --> adds new elements
slice() -->remove elemnets
reverse() --> reverse the array elements


num = [1,2,3,,4,5];
(6) [1, 2, 3, empty, 4, 5]
num1=[7, 8, 9]
(3) [7, 8, 9]
num.concat(num1)
(9) [1, 2, 3, empty, 4, 5, 7, 8, 9]
num.splice(1,3);
(3) [2, 3, empty]
num
(3) [1, 4, 5]
num.slice(1,3);
(2) [4, 5]
num
(3) [1, 4, 5]

*/