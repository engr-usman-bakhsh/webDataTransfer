// Examine the document object
// alert (1)
// console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);


// for changing stud


// document.title= 'i am changing the title of the page';
// console.log(document.title);
// console.log (document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all); 
// console.log(document.all[12]); 


// we can change things based on the selectors 

// document.all[8].textContent = 'hello i am changing it by using DOM' //this method should not be used
// console.log(document.forms);
// console.log(document.forms[1]);
// console.log(document.links)
// console.log(document.images)




//Get Element by Id //



// // console.log(document.getElementById('header'))
// var header = document.getElementById('header');
// // header.innerText = "goodBy"
// // console.log(header.innerText) // it only reads the content without styling
// // console.log(header.textContent) //it will also display the style means if i hide the 123 by using display property it will display it,
// // console.log(header.innerHTML = "<h1> Items Listner</h1>") // it actually put the h1 inside the already existing heading
// // here we just add the element in the parent element i didn't replace it, for replacing we have different methods



// // Style Changing
// header.style.borderBottom= 'solid 5px black'
// var heading = document.getElementById('heading');
// heading.style.border = "3px black dotted";




// Get Elements By Class Name //



// var items=document.getElementsByClassName('items');
// console.log(items);
// console.log(items[2]);
// // items[1].textContent = 'hello 2';
// // items[2].style.fontWeight = 'bold'
// // items[1].style.backgroundColor = 'yellow';
// // items.style.backgroundColor = 'grey' // it will not work directly, we will use for loop for selection of each element and then we will apply the color property.

// for (var i = 0 ; i<items.length ; i++){
//     items[i].style.backgroundColor = 'grey';
//     console.log(items[i].textContent);
// }




//Get Elements By Tag Name//

// var items=document.getElementsByTagName('li');
// // console.log(items);
// // console.log(items[2]);
// // // items[1].textContent = 'hello 2';
// // // items[2].style.fontWeight = 'bold'
// // // items[1].style.backgroundColor = 'yellow';
// // // items.style.backgroundColor = 'grey' // it will not work directly, we will use for loop for selection of each element and then we will apply the color property.

// // for (var i = 0 ; i<items.length ; i++){
// //     items[i].style.backgroundColor = 'grey';
// //     console.log(items[i].textContent);
// // }


// Querry Selector//
// it only grabs the first one. if we want to grab all itoms we have to use querrySelectorAll///

// var items = document.querySelector('.items');
// items.style.backgroundColor = 'black';
// items.style.color = 'white';

// var lastItem = document.querySelector('.items:last-child');
// lastItem.style.color='#fff'
// lastItem.style.backgroundColor='#000'

// var secondItem = document.querySelector('.items:nth-child(2)');
// secondItem.style.color='#fff'
// secondItem.style.backgroundColor='#000'


// var input = document.querySelector('input[type = "text"]');
// input.value = "Hello World";


// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'Send'
// submit.style.backgroundColor = '#111';
// submit.style.color = '#fff';




// QuerrySelector All //



// var odd = document.querySelectorAll('.items:nth-child(odd)');

// for (var i = 0; i < odd.length; i++){
// odd[i].style.backgroundColor = 'black';
// odd[i].style.color = 'white';
// }


// var even = document.querySelectorAll('.items:nth-child(even)');

// for (var i = 0; i < even.length; i++){
// even[i].style.backgroundColor = '#ccc';
// even[i].style.color = '#000';
// }



// // DOM Traversing //

var itemsList = document.querySelector('#items')
console.log(itemsList.parentNode) // it will select the parent of this id element.
itemsList.parentNode.style.backgroundColor = '#ccc'
var input = document.querySelector('#input')
input.parentNode.parentNode.style.backgroundColor = '#ccc'

console.log(itemsList.parentNode.parentNode.parentNode)

// parentNode and parentElements are interchangeable

// // ChildNodes
// console.log(itemsList.childNodes); // list will display in the form of array, at every line break we will get a 'text' item in the list. tp avoid this we can use the 'children' insted of 'childNodes'
// console.log(itemsList.children);

// // how to access a specific child
// for (i = 0; i < itemsList.children.length; i++) {
//     let green = 150;
//     let red = 125;
//     let blue = 250;
//     let a = 1;

//     itemsList.children[i].style.backgroundColor = `rgba(${red} , ${green} , ${blue} , ${a})`;
// }
// console.log(itemsList.children[1]);


// // first child // 

// console.log(itemsList.firstChild)
// itemsList.firstElementChild.textContent = 'hello world'
// console.log(itemsList.firstElementChild)



// // last child // 

// console.log(itemsList.lastChild)
// itemsList.lastElementChild.textContent = 'hello world'
// console.log(itemsList.lastElementChild)




// nextSibling

// console.log(itemsList.nextElementSibling);
// console.log(itemsList.previousSibling);
// console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.backgroundColor = 'yellow'



// create element //

// var newDiv = document.createElement('div');

// //add a class name
// newDiv.className = 'hello';

// //add an id 
// newDiv.id = 'hello1'

// //adding an attribute
// newDiv.setAttribute ('title' , 'hello world');

// //create text node

// var newDivText= document.createTextNode('hello world');

// newDiv.appendChild(newDivText);

// container = document.querySelector('header .header')

// h2 = document.querySelector('header h2');

// console.log(newDiv)

// newDiv.style.paddingLeft = '50px'
// newDiv.style.fontSize = '30px'
// newDiv.style.fontWeight = 'bold'
// // container.insertBefore(newDiv, h2);

// let list =document.createElement('li');
// list.className='items';
// list.id= 'item6';
// let listData=document.createTextNode('Item6');
// list.appendChild(listData);

// container = document.querySelector('.container #items');
// li = document.querySelector('#items #item5');


// container.insertBefore(list,li);

// console.log(list)



//Events In DOM