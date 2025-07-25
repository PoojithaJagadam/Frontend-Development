// factorial
/*let a=5;
let res=1;
for(let i=1;i<=a;i++){
    res*=i;
}
console.log(res); */


// using reduce and array 
 let n=5;
 function factorial(n) {
    let a=Array.from(Array(n+1).keys());
    let c=a.slice(1,);
    let ans=(a,b)=> {
        return a*b;
    }
    console.log(c.reduce(ans));
 }
 factorial(n);