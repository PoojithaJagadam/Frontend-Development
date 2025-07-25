//these will run on js console

document.querySelector(".box").hasAttribute("style")
true
document.querySelector(".box").innerHTML
//'\n            hey Iam a box\n        '
document.querySelector(".box").innerText
//'hey Iam a box'
document.querySelector(".box").tagName
//'DIV'
document.querySelector(".box").outerHTML
//'<div class="box" style="display: flex;">\n            hey Iam a box\n        </div>'
document.querySelector(".container").outerHTML
//'<div class="container">\n        <div class="box" style="display: flex;">\n            hey Iam a box\n        </div>\n        <div class="box">\n            hey Iam a box\n        </div>\n    </div>'
document.querySelector(".container").innerText
//'hey Iam a box\nhey Iam a box'
document.querySelector(".container").nodeName
//'DIV'
document.querySelector(".container").tagName
//'DIV'
document.querySelector(".box").getAttribute("style")
//'display: flex;'
document.querySelector(".box").setAttribute("style", "display : inline")
//undefined it will automatically set
document.querySelector(".box").dataset
//DOMStringMap {createdby: 'pooji', conceptby: 'Rohan'}
document.querySelector(".box").remove()
// remove class with box
document.querySelector(".container").className
//'container red bg-green'
document.querySelector(".container").classList.add("Pooji")
//it will add
document.querySelector(".container").classList.remove("Pooji")
//it will remove classname


document.querySelector(".container").classList.toggle("red")
//false //if red class there means it will delete
document.querySelector(".container").classList.toggle("blue")
//true //if if not present then add