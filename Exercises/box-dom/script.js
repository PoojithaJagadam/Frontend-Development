let rand=Math.random();
console.log(rand);
if(rand<0.1) {
    document.getElementById("one").style.backgroundColor = "blue";
}
else if(rand>0.1 && rand< 0.7) {
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = "green";
    })
}
else {
    document.getElementById("two").style.backgroundColor = "red";
}
