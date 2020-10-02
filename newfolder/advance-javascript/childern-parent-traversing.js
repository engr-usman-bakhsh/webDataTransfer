console.log('this is an example of parent child traversing');

// let cont = document.querySelector(".container");

// console.log(cont.children)
// console.log(cont.childNodes)
// console.log(cont.childNodes[0].nodeName)
// console.log(cont.childNodes[0].nodeType)
// console.log(cont.children)
// console.log(cont.children[0].nodeName)
// console.log(cont.children[0].nodeType)


let container = document.querySelector('.container')
// console.log(container.children[6].children[0].children)
// console.log(container.firstChild)
// console.log(container.lastChild)
// console.log(container.firstElementChild)
// console.log(container.lastElementChild)
// console.log(container.childElementCount)
// console.log(container.children)
console.log(container.firstElementChild.nextElementSibling.nextSibling)

