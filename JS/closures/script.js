// closure -> converting local elements to global
function fun() {
    let c=0;
    return function() {
        c++;
        return c;
    }
}

const c1=fun();
console.log(c1());
console.log(c1());

const c2 = fun();
console.log(c2());
console.log(c2());
