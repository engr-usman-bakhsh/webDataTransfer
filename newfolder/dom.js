// Methods to select an element from dom but its not good method
// let val;
// val = document;
// val = document.all;
// val = document.all[8];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;



// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;




// some extra stuff
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];



// val = document.images;



// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].getAttribute('src');

// let scripts=document.scripts;
// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(function(script){
// console.log(script)
// })
// console.log(val);





///////////////////////////////////////////////////////////////





// Element Selectors
// document.getElementById()
// let val;
// val = document.getElementById('taskList');



// get things from the element
// console.log(val.id);
// console.log(val.className);


// change Styling
// val.style.backgroundColor = "#333"
// val.style.color = "#fff"
// val.style.padding='5px'
// val.style.marginBottom='5px'
// document.getElementById('taskList').style.display= 'none' // it will hide that object



// change content
// val.textContent = 'Task List'
// val.innerText = 'My List'
// val.innerHTML = '<h2 style="color:yellow">Task list</h2>';



// Querry Selector. its newer and more powerfull
// we can use css selectors inside the querry selectors



// val = document.querySelector('#taskList');
// val = document.querySelector('.cross'); // it only selects the first element
// val = document.querySelector('li');
// val = document.querySelector('li .cross');
// val = document.querySelector('li:last-child');
// val = document.querySelector('li:first-child');
// val = document.querySelector('li:nth-child(5)');
// val = document.querySelector('li:nth-child(odd)');
// val = document.querySelector('li');
// val.textContent='hello'



// console.log(val.style.textContent='hello')
// console.log(val)





/////////////////////////////////////////////////////////////////




// JS Selectors for multiple elements
// document.getElementsByClassName()
// let listItems;
// listItems = document.getElementsByClassName('listItems');
// for(let i =0; i<listItems.length;i++){

// console.log(i,listItems[i]);} // it will display the 6 elements

// // we can select elements more precisely
// console.log('hello World')
// let list = document.querySelector('ul').getElementsByClassName('listItems')
// for(let j=0;j<list.length;j++){
//   console.log(j,list[j])
// } // it will display the 5 items because we selected the class under the 'ul' tag, it more precisely attack on elements



//getElementsByTagName
// console.log('hello World')
// let lis = document.getElementsByTagName('li')
// lis[0].style.backgroundColor='#ccc';
// lis[1].style.backgroundColor='#cdc';
// lis[2].style.backgroundColor='#cec';
// lis[3].style.backgroundColor='#cfc';
// lis[4].style.backgroundColor='#cac';
// console.log(lis)
// lis = Array.from(lis)
// lis.forEach(function(li){
// console.log(li)
// li.textContent='hello'
// })



// let a = '*'
// for (let i=0;i<10;i++){
//   console.log(a.repeat(' '+i));
// } // tree code 



// console.log('tag name is : '+lis[0].id+ ' '+'Class Name Is'+lis[0].className);
// console.log('tag name is : '+lis[1].id+ ' '+'Class Name Is'+lis[1].className);
// console.log('tag name is : '+lis[2].id+ ' '+'Class Name Is'+lis[2].className);
// console.log('tag name is : '+lis[3].id+ ' '+'Class Name Is'+lis[3].className);
// console.log('tag name is : '+lis[4].id+ ' '+'Class Name Is'+lis[4].className);



// lis = Array.from(lis)
// // lis.reverse();
// console.log(lis);
// lis.forEach(function(li, index){
//   console.log(li)
//   li.textContent=`${index} hello`
// })


// for (i=0;i<lis.length;i++){
//   console.log(lis[i].id)
// }


// querrySelectorAll()
// let items = document.querySelectorAll('ul li.listItems');
// console.log(items)
// // items = Array.from(items)
// items.forEach(function(item,index){
//   console.log(item);
//   item.textContent=`${index} hello`;
// })


// const itemsOdd = document.querySelectorAll('li:nth-child(odd)')
// const itemsEven = document.querySelectorAll('li:nth-child(even)')
// console.log(itemsOdd);
// console.log(itemsEven);


// // using forEach loop
// itemsOdd.forEach(function(iodd,index){
//   iodd.style.backgroundColor='#ccc';
// })


// // use conventional forEach loop
// for (i=0;i<itemsEven.length;i++){
//   itemsEven[i].style.backgroundColor='#f4f4f4';
// }



//////////////////////////////////////////////////////////////////
// Traverse the DOM
// traverse means move up and down from parents to childern and vice versa

// let val;
// const list = document.querySelector('ul');
// const listItems=document.querySelector('li.listItems');
// val = list;
// val = listItems;  

// Get ChileNodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[3].nodeType;

// 1- Element
// 2- Attribute
// 3- text Node
// 8- Comment
// 9- document itself
// 10- Doctype 


// Get child element nodes
// val = list.firstElementChild;
// val = list.children;
// val = list.children[2];
// list.children[0].textContent = 'hello'


// //Children of children
// list.children[3].children[1].id = 'span';
// val = list.children[3].children[1];

// // firstChild
// val = list.firstChild;
// val = list.firstElementChild;

// //Last Child
// val = list.lastChild;
// val = list.lastElementChild;

// // childElementCount
// val = list.childElementCount;

// // Parent element
// val=list.parentElement.parentElement.parentElement.parentElement.parentElement;
// val = listItems.parentNode.parentNode;
// val = listItems.parentElement;

// // Get Next Sibling
// val = list.nextSibling;
// val = listItems.nextElementSibling.nextElementSibling;

// // Get previous Sibling
// val = list.previousSibling;
// val = listItems.nextElementSibling.nextElementSibling.previousElementSibling.previousSibling;


// console.log(val);





////////////////////////////////////////////////////////////////////



// Creating Elements and adding things in it
// let val;
// // create element
// const li = document.createElement('li');

// // Add class
// li.className = 'listItems';

// // Add Id
// li.id = 'item6';

// // Add Attribute
// li.setAttribute('title', 'new itom');

// // Create Text Node inside it and append text in li
// addingText = document.createTextNode('Hey There IM usman, I am ahere to learn About DOM manipulation, I have thrust to learn Web Development');
// li.appendChild(addingText);

// // Now Append li as a child of ul in DOM which will show in browser
// val = document.querySelector('div#items ul') // we selected the element inside which we have to add the newly created element
// val.appendChild(li);

// console.log(val);
// console.log(li)
// // now its time to add a cross inside it
// // first created the input element
// const button = document.createElement('button');
// // set id
// button.id='item6';
// //set class
// button.className = 'cross'
// // set Attribute
// // nothing

// // add text
// button.appendChild(document.createTextNode('X'));
// // now its time to appen it inside the DOM
// document.querySelector('div#items ul li#item6').appendChild(button)

// console.log(li)



//////////////////////////////////////////////////////////////

// Replace and Remove an element

// let newHeading = document.createElement('h2');
// // add id
// newHeading.id = 'taskList';
// // new text node
// newHeading.appendChild(document.createTextNode('Tasks List'));

// // Get Old Heading
// const oldHeading = document.getElementById('taskList');

// // Get Parent
// const parentDiv = document.querySelector('div#tasks')

// // Now Replace it
// parentDiv.replaceChild(newHeading,oldHeading)
// console.log(newHeading)
// // successfully replaced element


// ////////////////////////////////////////////////
// // Remove element
// const lis = document.querySelectorAll('li'); // its parent of below list element
// const list = document.querySelector('ul');  // its child of above

// Remove list item
// lis[0].remove();

// remove child element
// list.removeChild(lis[0]);
// list.removeChild(lis[1]);
// list.removeChild(lis[2]);
// list.removeChild(lis[3]);    // all are removed


//////////////
// how to add class to any element like link
// let firstLi =  document.querySelector('li:first-child');
// for (let i=0;i<firstLi.length;i++){
//   console.log(firstLi[i].children[0])
// }

// const button = firstLi.children[0];
// let val;

// classes
// val = button.className;
// val = button.classList;
// val = button.classList[0];
// val = button.classList[1];
// val = button.classList[2]; // undefined, not present
// button.classList.add('remove')
// button.classList.remove('remove')

// Attributes
// val = button.getAttribute('id');
// val = button.getAttribute('class');
// button.setAttribute('purpose', 'delete');
// button.removeAttribute('purpose')

// val = button.hasAttribute('purpose')

// console.log(button);
// console.log(val);




/////////////////////////////////////////////////////////////

// EventListner

// const buttonToAddTask = document.querySelector('#buttonAddTask');
// buttonToAddTask.addEventListener('click', onClick);

// function onClick(e){
// console.log('hello World');
// let val = e;
// val = e.target;
// val = e.target.id;
// val = e.target.className;
// val = e.target.classList;
// e.target.innerText = 'hello';

// Event Type
// val = e.type;

// timeStamp
// val = e.timeStamp;

// Get Coordinates event relative to the window
// val = e.clientX;
// val = e.clientY;


// Coordinate Events relative to the element
// val = e.offsetY;   
// val = e.offsetX;

//   console.log(val)

// }


//////////////////////////////////////////////////////////////


/// Mouse Events

// const clearBtn = document.querySelector('#clearTask');
// const cont = document.querySelector('#container');
// const heading = document.querySelector('h2');

// Now Add Event Listner

// click
// clearBtn.addEventListener('click',runEvent);
// Double Click
// clearBtn.addEventListener('dblclick',runEvent);
// mousedown
// clearBtn.addEventListener('mousedown',runEvent);
// mouseup
// clearBtn.addEventListener('mouseup',runEvent);

// mouseenter
// clearBtn.addEventListener('mouseenter',runEvent); // element level
// cont.addEventListener('mouseenter',runEvent); 

// mouseleave
// clearBtn.addEventListener('mouseleave',runEvent); // element level
// cont.addEventListener('mouseleave',runEvent);

// mouseover 
// clearBtn.addEventListener('mouseover',runEvent);
// cont.addEventListener('mouseover',runEvent)

// mouseout
// clearBtn.addEventListener('mouseout',runEvent);
// cont.addEventListener('mouseout',runEvent)

// mousemove
// cont.addEventListener('mousemove',runEvent);




// Event Handler
// function runEvent(e){
//   console.log(`Type pf Event is : ${e.type}`);
//   heading.textContent = `MouseX = ${e.offsetX} , MouseY = ${e.offsetY}`
//   // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},20)`
// }



/////////////////////////////////////////////////////////////
// let form = document.querySelector('form');
// let addTaskText = document.querySelector('form input#addTaskText');
// let heading = document.querySelector('h2');
// let select = document.querySelector('select')
// Submit
// form.addEventListener('submit', runEvent);

// keydown
// addTaskText.addEventListener('keydown', runEvent);

// keyup
// addTaskText.addEventListener('keyup', runEvent);

// keypress
// addTaskText.addEventListener('keypress', runEvent);

// focus
// addTaskText.addEventListener('focus', runEvent);

// blur
// addTaskText.addEventListener('blur', runEvent);

// Cut
// addTaskText.addEventListener('cut', runEvent);

// Paste
// addTaskText.addEventListener('paste', runEvent);

// input
// addTaskText.addEventListener('input', runEvent);

// change
// select.addEventListener('change', runEvent);


// function runEvent(e){

// e.preventDefault();
// console.log(`EVENT TYPE : ${e.type}`);

// Catch The Input Value
// console.log(e.target.value);
// heading.innerText = e.target.value;
// Get Input Value
// console.log(addTaskText.value);

// addTaskText.value = ''; // this is used to empty the text field



// }
// console.log(addTaskText);
// console.log(form.id);


//////////////////////////////////////////////////////////////////

// Even Bubbling and Event delegation

// event bubbling is the bubbling up of the events through the dom, actually when an event happen to a particular element in the dom and actually will bubble UP through its parents

// Event delegation is almost opposite to the event bubbling. if we put the event on one of the parent elements and then we use logics inside of the event handler to target the element that we actually want that click for whatever type of event it is.

// we will select the ul element and will select its childs li, may be for the purpose of deletion.

// EVENT BUBBLING is very important concept
// lets we select a child and then its pareant than its parent than its parent and so on upto which u want


// let submitButton = document.querySelector('#buttonAddTask').addEventListener('click', function(e){
//   console.log('Submit Button');
// e.preventDefault();
// })

// let form = document.querySelector('form').addEventListener('click', function(){
//   console.log('form');
// })

// let container = document.querySelector('#container').addEventListener('click', function(){
//   console.log('container');
// })

////////// actually i pressed the button only but it displays all the above options



// Event Delegation
// document.body.addEventListener('click' , deleteItem);
// function deleteItem(e){
// console.log(e.target);
// if (e.target.className === 'cross delete'){
//   console.log('delete item')
// } // if any one class will be missing or didnot present than it will not work

// same work by playing with its parent
// if (e.target.parentElement.className === 'listItems'){
//   console.log('delete item')
// } // if any one class will be missing or didnot present than it will not work

// to avoid the classNAme problem use classsList

// if (e.target.classList.contains('delete')){
//   let warnning = confirm('Are You Sure To Delete This Itom')
//   if (warnning){
// e.target.parentElement.remove();
//   }
// }

// } // if any one class will be missing or didnot present than it will not work


// delete whole items at a time
//   if (e.target.className === 'remove'){
//     // console.log('delete item');
//     let warn = confirm('Are You Sure To Delete All Itoms?')
//     if (warn) {
//       let writeText =prompt(`Kindly Write "I Agree" `)
//       if (writeText === 'I Agree'){
//         alert('All Items Are Deleted');
//         e.target.parentElement.previousElementSibling.children[0].remove();

//       }
//       else {
//         alert('Kindly ensure you follow the capital and small latter case, and Try Again')
//       }
//     }
//   }
// }


//////////////////////////////////////////////////////////////////
// Local and Sessional Storage


// Objets and arrays are saved in string form, first we convert arrays and objects in string form than we save tham in local or sessional storage. 
// json.stringify  /// this is used to convert the arrays and objects to string
// json.parse  // this method to use the saved string back

// sessional storage vanishes when the browser is closed, 
// local storage remains even the browser is closed



// storage is in the form of key and value pairs

// set local storage items
// localStorage.setItem('name','usman');
// localStorage.setItem('age','30');
// localStorage.setItem('fName','Bakhsh');



// set sessional storage items
// sessionStorage.getItem('name','farooq');


// remove from storage
// localStorage.removeItem('name');


// get from Storage
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('age'));
// console.log(localStorage.getItem('fName'))

// console.log('now we will clear the local storage');

// localStorage.clear();

// console.log(localStorage.getItem('name')); //it will give the null
// console.log(localStorage.getItem('age'));  //it will give the null
// console.log(localStorage.getItem('fName')); //it will give the null


// get value from form

// document.querySelector('form').addEventListener('submit',function(){
//   const addTaskText = document.getElementById('addTaskText').value;
//   // localStorage.setItem('tasks', addTaskText);

//     // the problem is that all times we add new task it will replace the previous one
//   // we will create an array to save data but in JSON Objects(strings)

//   let Tasks;

//   if (localStorage.getItem('tasks')=== null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'))
//   }  // here we just setting up the new variable in the local storage, if its already present we just initialize it as a JSON Objects(Strings)

//   tasks.push(addTaskText);
//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   alert('Task Saved')



//   e.preventDefault();
// });


// // How to get Stored Items?

// const tasksListing = JSON.parse(localStorage.getItem('tasks'));
// tasksListing.forEach(function(task){
//   console.log(task);
// })