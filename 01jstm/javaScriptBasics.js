// alert('hello world')

// sinle line comment
/* multi
line
comment*/

// console.log('hello world');
// console.log(true);
// console.log(123);
// console.log(2*3*4+5-3-5);
// console.log([1,2,3,4]);
// console.log({a:1 , b:2});
// console.error("this is some error");
// console.clear("console is cleared");
// console.warn("this is warning")
// console.time('hello')
//         for (var i = 0 ; i<2000 ; i++){
//           console.log("helloWorld")
//         }
// console.timeEnd('hello')









///////////////////   Variables ////////////////




// three possible keywords for declaring a variables are
// var , let , const
// const has block level scope
//  var 1firstname = 'usman';   // this is not allowed
// var -firstname = 'usman';     // also not allowed
// var _firstname='usman';    // this is allowed
// var $firstname='usman'    // this is allowed 
// var firstName = 'usman' // camel case
// var First_name = 'usman' // underscore
// var FirstName = 'usman'  // pascal  case
// var firstName; 
// console.log(firstName) // it will return undefined




///////////////////////////////////////////////




// difference between var and let





//var


// var name = 'usman';
// var name = 'usman Bakhsh'    // va is overWrited when again initialized by using 'var' keyWords
// console.log(name);
//  we cannot do the same thing with let




// let example


// let name = ' usman'
// console.log(name)
// name = 'usman Bakhsh'   // this is allowed
// let name = 'usman Bakhsh'  // this is not allowed 
// console.log(name)




// const example


// const name = 'usman';
// console.log(name);
// name = ' usman Bakhsh'  // this is not allowed 
// const name = 'usman bakhsh'   // thi is also not allowed 
// even 'const' cannot initialize the variable
// const lName;   // this is also not allowed 
// console.log(lName)
// console.log(name)





// const with objects, a confusing concept


// const person = {
//   name: 'usman',
//   fatherName: 'mBakhsh',
//   age: 25,
// }
// //even we initialize the object with const, but we can mutate its any key value pair  by using following method
// person.name= 'usmanBakhsh'  // its a very important concept
// person.age = 30;
// console.log(person);
// console.log(person.name);
// console.log(person.fatherName);
// console.log(person.age);
// // thisis the example of an object we can do the same things with arrays



// const with arrays


// const numbers = [1,2,3,4,5];
// numbers.push(6); // push function is used to push data in an array at last index
// // but we cannot do the following thing
// numbers =[1,2,3,4,5,6] // this will generate an error, because we are assigning a whole new array to an existing variable
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);
// console.log('we will print array data by using loop just wait and watch')
// // instead we can use the loop to access all the indexes
// for (i=0;i<numbers.length;i++){
//   console.log(numbers[i]);
// }



////////////////////////////////////////////////////////////////
//Data Types
// in java script there are two types of data types

// 1- permitive data types
//directly stored in the location the variable accesses
// stored on the stack(when we access data we assess it by its actual value)
// Strings(sequences of letters, numbers, characters, symbols), Numbers(integers, decimals, floats), Boolean(true,false), Null(its an intentional empty value ), Undefined(is a variable that has not assigned a vlue),symbols ES6(these are a little bit complicated, we'll discuss it latter) 

// 2- refference data types
// accessed by refference not accessed by actual value
//Objects are stored on the heap(heap is dynamically allocated memory)
// A pointer to a location in a memory
//Arrays(collection of same of different types of data and each has a unique index number), Object Literals(combinations of key value pairs.), Functions, Dates, AnythingElse,

// Javascript is a dynamically typed language, its data type consists on value not the variable.
// same variable can hold multiple types.
// we donot need to specify the type.
//other languages are statically types(C, C#, Java)
// there are supersets of javascripts, and addons to allow static typing(typescript, flow)




/////////////// Code for Different data types///////////


// string
// let name = 'Usman Bakhsh';
// console.log(name,typeof name)
// console.log('type of data is '+ typeof name)



// numbers
// let age = 26;
// console.log(typeof age);
// age = '26'
// console.log(typeof age);


// // boolean.
// let hasKids = true;
// console.log(typeof hasKids)


// Null 
// let car = null;
// console.log(typeof car); // its a bug


//Undefined
// let name;
// console.log(typeof name);


//Symbols
// const sym = Symbol();
// console.log(typeof sym);


// Refference Data types
// Array
// const work = ['playing','music','movies',1,2,3,4,'hesitating'];
// console.log(work, typeof work);



// Objects
// const person = {
//   name: 'usman',
//   fatherName: 'M Bakhsh',
//   age: '25',
//   status: 'Student',
// }
// console.log(typeof person)


// date
// const today = new Date();
// console.log(today);
// console.log(typeof today);



/////////////////////////////////////////////////////////////////


// Type Conversion

// let val;
//Numbers to String
// val = String(555);
// val = String(4+4+4)

//boolean to string
// val= (true).toString();
// val= 'false';
// val= 'null'

// date to string
// val= 'new Date()'   // not worked properly
// val= new Date().toString();   // worked

// Array to String
// val = '[1,2,3,4]'; 
// val= [1,2,3,4,5].toString()
// val= String([1,2,3,4]);

//Object to String
// val ={
//   name: 'Usman',
//   fName: 'Bakhsh',
//   age: 30,
// }.toString()



// to Numbers

// val = Number(true);
// val = Number(false);
// val = Number('555');
// val = Number(null)
// val = Number('hello'); // NAN error
// val = Number([1,2,3,4,5,6]); //NAN
// val = parseInt('30.34'); // it doesnt display decimal points
// val = parseFloat('12.23'); // it displays decimal points
// val = Number('12.234'); // it can works like above two


//Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2)); //only works with a number


// type coversion


// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1+val2);  // concatination will occur
// console.log(sum)
// console.log(typeof sum);




////////////////////////////////////////////////////////


// Numbers and Math Object


// const num1 = 100;
// const num2 = 50;
// let val;
// // Simple Math with Numbers
// val = num1+num2; 
// val = num1*num2;
// val = num1-num2;
// val = num1/num2;
// val = num1%num2;


// /// Math Object
// val = Math.E;
// val = Math.PI;
// val = Math.round(2.4); // 2 is answer
// val = Math.round(2.6);  // 3 is answer
// val = Math.round(2.5);  // 3 is answer
// val = Math.round(3.5);  // 4 is answer

// // Math.ceil always round the number to upper side
// val = Math.ceil(2.4);  // answe is 3
// val = Math.ceil(2.5);  // answe is 3
// val = Math.ceil(2.6);  // answe is 3
// val = Math.ceil(2.01);  // answe is 3

// // Math.floor always round the number to lower side
// val = Math.floor(2.1);  // answer is 2
// val = Math.floor(2.5);  // answer is 2
// val = Math.floor(2.9);  // answer is 2

/////
// val = Math.sqrt(36);
// val = Math.abs(-9);
// val = Math.pow(8,2);
// val = Math.min(2,3,4,5,6,-2,-3,99);
// val = Math.max(2,3,4,5,6,-2,-3,99);
// val = Math.random(); // it generates a random number between 0 and 1

// // how to generate a random number between 1 to 6
// val = Math.floor(Math.random()*6+1); // it can be used in games

// console.log(val);

///////////////////////////////////////////////////////////////



// //  String Method and concatination
// const firstName = 'usman';
// const lastName = 'Bakhsh';
// const age = 36;
// let data= 'my name is usman i am mechatronics and control engineer';
// let val;

// // Concatination
// val = firstName+lastName;
// val = firstName+' '+lastName;

// // Append
// val = firstName;
// val += ' ';
// val += lastName;
// val = 'Hello ! My Name is'+' '+firstName+' and I am '+ age; 

// // Escaping  // when single inverted commas are used in the string

// val = 'that\'s awesome, i can\'t wait';

// // length
// val = firstName.length;
// val= lastName.length;

// // concat()
// val = firstName.concat(' ',lastName)

// // indexOf
// val = data.indexOf('n');
// val = data.lastIndexOf('n'); 

// // change case
// val = data.toLowerCase();
// val = data.toUpperCase();
// val = data.toLocaleUpperCase();

// // charAt()
// val = firstName.charAt('4');

// // Get Last Character
// val = firstName.charAt(firstName.length - 1);
// val = lastName.charAt(lastName.length - 1);

// // Substring
// val = data.substring(0,8); // starting from 0 index and pick 8 characters

// // slice(); // its very similar to Substring but it can also give negative string
// val = data.slice(0,8);
// val = data.slice(-16);

// // split() // it splits a string into an array based on a separator
// val = data.split(' ')
// let course = ' web Design, web Development, Programming';
// val = course.split(',')

// //replace('word which will be replaced', 'word from which other word is replaced'); // it is used to replace an word from a string
// val = course.replace('web','Mobile');

// // include()
// val = data.includes('enginer')// false because spell mistake
// val = data.includes('engine') // true, even the word in not completed

// console.log(val);


////////////////////////////////////////////////////////////////


/// Template Litteral// its very wonderfull method

// let name= 'Usman'
// let fName = ' Muhammad Bakhsh'
// let age = 32;
// let job = 'Web Development'
// let city = 'faisalabad'
// let html;
// without the template litteral {ES5}
// we'll use the DOM here to represent data in the browser, so dont worry here about DOM , we'll learn it in depth

// html = '<ul><li>Name: ' + name + ' </li><li>Father Name :' + fName + ' </li><li>Age :' + age + ' </li><li>Job:' + job + ' </li><li>City:' + city + ' </li></ul>';

// html = '<ol>' +
//       '<li> Name:' + name + ' </li>' +
//       '<li> Father Name : ' + fName + '</li>' +
//       '<li> Age:' + age + '</li>'+
//       '<li> Job: '+ job + '</li>' +
//       '<li>City: ' + city + '</li>' +
//       '</ol>'


// with the template litteral {ES6}

// function table(){
// for (let i=1;i<=10;i++){
// let val = '2 X '+i+' = '+2*i;
// return val; 
// }
// }
// html = `
//   <ul>
//       <li>Name: ${name}</li>
//       <li>Father Name: ${fName}</li>
//       <li>Age ${age}</li>
//       <li>Job ${job}</li>
//       <li>City: ${city}</li>
//       <li>Sum of 2+2+2= ${2+2+2}</li>
//       <li>Table of 2 is ${table()} 
//       </li>
//       <li>${age <= 30 ? " if condition is true' Under age'":"if condition is false' Over age'"}</li>
// `
// document.body.innerHTML = html;


////////////////////////////////////////////////////////////////


// Arrays and Arrays methods
// creating some arrays
// const num = [36,48,55,12,5,100,20,7];
// const num2 = new Array(12,23,34,45,56,67,78,89);
// const fruit = ['mango', 'apple', 'banana','watermellon'];
// let val;

// // Get Array Length
// val = num.length
// // Check if array
// val = Array.isArray(num);
// val = Array.isArray(num2);
// val = Array.isArray('num2');

// // Get a single value
// val = num[0];
// val = num2[0];

// //insert into an array at any index number
// num[1]=100;

// // find index of value
// val = num.indexOf(88);

// //Mutating Arrays
// // add a number at last 
// num.push(100);

// // take off from end
// num.pop();

// // add a number at first
// num.unshift(11);

// // take off from start
// num.shift();

// // splice value // it takes off the value from an array we can store them in a variable
// console.log(num);
// val = num.splice(0,3); // 3 indicates the total numbers

// Reverse
// console.log(num);
// val=num.reverse();

// concat Array /// means adding two arrays
// val = num.concat(num2);

// Sorting arrays
// num.sort(); // it only sort the array by inspecting the first number. means 5 is placed after 44, its not good, to solve this problem we use the compare function
// fruit.sort();

// compare function  for forward sort
// val = num.sort(function(x,y){
//   return x-y;
// });

// // compare function for reverse sort
// val = num.sort(function(x,y){
//   return y-x;
// });

// find a number
// function under50(num){
//   return num<50
// }
// val = num.find(under50) // it returns the first number which is under 50
// function over50(num){
//   return num>50
// }
// val = num.find(over50) // it returns the first number which is under 50


// console.log(num);
// // console.log(fruit);
// // console.log(num2);
// console.log(val);


//////////////////////////////////////////////////////////////////


// Object Literals

// const person = {
//   name: 'usman',
//   age: 25,
//   job: 'Web Development',
//   email: 'ehmusman@gmail.com',
//   hobbies:['Codding','Devops','web'],
//   address: {
//     city: 'Faisalabad',
//     province: 'punjab',
//     state: 'pakistan',
//   },
//   getBirthYear: function(){
//     return 2020 - this.age;
//   },
// };

// val = person.email;
// val = person.age;
// val = person['age']; // other syntx
// val = person.name;
// val = person.job;
// val = person.hobbies[1];
// val = person.hobbies[2];
// val = person.hobbies[0];
// val = person.address.city.toUpperCase();
// val = person.address['city']; // other syntax
// val = person.getBirthYear();

// const people = [
//   {name:'usman', age: '25'},
//   {name:'farooq', age: '28'},
//   {name:'ehsan', age: '18'},
// ];
// for (let i=0;i<people.length;i++){
//   console.log(people[i].name);
//   console.log(people[i].age);

// }


/////////////////////////////////////////////////////////////////

// Date is Javascript

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(val);


//////////////////////////////////////////////////////////////////

// IF  and IF ELSE Statement
// const id = 100;
// if (id == 100){
//   console.log(`your id is ${id}`)
// }
// else {
//   console.log(' your id is not correct')
// }
// const name = 'faroo';
// if (name === 'farooq'){
//   console.log(`your name is ${name}`)
// }
// else if (name === 'usman'){
//   console.log(`your name is ${name}`)
// }
// else{
//   console.log('your name is not present in the list')
// }

// const name = 'usman';
// let age = 121;
// if (age >0 && age <=12){
//   console.log(`${name} is a child`)
// }
// else if (age>=13 && age <= 20){
//   console.log(`${name} is a teenager`)
// }
// else if (age >=21 && age <=30){
//   console.log(`${name} is adult`)
// }
// else if (age >=31 && age <=50){
//   console.log(`${name} is a man`)
// }
// else if (age >= 51 && age <= 120){
//   console.log(`${name} you are old enough`)
// }
// else {
//   console.log(`${name} you are an extraordinarry human`)
// }

// ternary Operators
// let age = 51;
// console.log(age <= 50 ? 'yu can run a race': 'you are not suppose to run a race')
// we can use if statements without curly braces, than very next line will run


//////////////////////////////////////////////////////////////////


// // Switch Statements
// let day;
// switch(new Date().getDay()){
// case 0:
//   day = 'Sunday';
//   break;
// case 1:
//   day = 'Monday';
//   break;
// case 2:
//   day = 'Tuesday';
//   break;
// case 3:
//   day = 'Wednesday';
//   break;
// case 4:
//   day = 'Thursday';
//   break;
// case 5:
//   day = 'Friday';
//   break;
// case 6:
//   day = 'Saturday';
//   break;
// }
// console.log(`today is ${day}`)
// console.log(new Date().getDay())


//////////////////////////////////////////////////////////////////






// Functions Declaration and expressions

// Functions Declaration
// function greet(){             //this is function declaration
//   console.log('hello world')  //this is function declaration
// }                             //this is function declaration
// greet(); // function calling answer is printed hello world


// function greet(){             //this is function declaration
//   return 'hello world';  //this is function declaration
// }                             //this is function declaration
// console.log(greet()); // function calling answer is printed hello world


// All types of functions can take a parameter is called argument

// function greet(firstName , lastName){
//   return 'hello' + ' '+ firstName + ' ' + lastName; 
// }
// console.log(greet('Usman','Bakhsh'));


// // Undefined Answer
// function greet(firstName , lastName){
//   return 'hello' + ' '+ firstName + ' ' + lastName; 
// }
// console.log(greet()); // if we donot pass the parameters then aswewr will be undefined


// how to overcome this undefined message?
// before ES6 we used
// function greet(firstName , lastName){
//   if (typeof firstName === 'undefined'){ firstName = 'Usman'}
//   if (typeof lastName === 'undefined'){ lastName = 'Bakhsh'}
//   return 'hello' + ' '+ firstName + ' ' + lastName; 
// }
// console.log(greet('farooq','shehzad'));


// Undefined Solution In ES6
// function greet(firstName = 'Usman', lastName = 'Bakhsh'){
//   return 'hello' + ' '+ firstName + ' ' + lastName; 
// }
// console.log(greet());


// Function Expression
// is basically putting a function as a variable assignment
// const square = function(x=3){
//   return x*x;
// };
// console.log(square(778))



// Immediately Invokable function expressions(IIFEs)
// means run and declare the function at the same time
// so we define any anonymous function inside a parenthesis
// its a type of fun
// (function(){
//   console.log("hello world")
// })();

// it can also take a parameter like
// (function(name){
//   console.log(`Hello ${name}`)
// })('usman');


// Property methods
// when a function is put inside an object, it's called a method





/////////////////////////////////////////////////////////////////////


// LOOPS

// For Loops
// for (let i=0;i<=10;i++){
//   if (i === 2){
//     console.log('2 is my favourite number')
//     continue; // it breakes the current itteration
//   }
//   if (i ===5){
//     console.log('stop the loop');
//     break;
//   }
//   console.log("Number is "+i);
// }


// While Loop
// let i=0;
// while(i<=10){
//   console.log('Number is '+i);
//   i++; // increment inside the loop
// }


// Do While Loop
// it runs atleast once
// let i=0;
// do {
//   console.log("Number is "+i);
//   i++;
// }
// while(i<-10);


// FOR loop through arrays
// const cars = ['honda','toyota','sheavy','proton'];
// for (i=0;i<cars.length;i++){
//   console.log(cars[i]);
// }

// forEach loop
// cars.forEach(function(a,index, array){
//   console.log(`${index}, ${a}`);
//   console.log(array)
// })


// Map
// const users = [
//   {name: 'Usman', age: 25},  
//   {name: 'Farooq', age: 29},  
//   {name: 'Ehsan', age: 18},  
// ];
// const age= users.map(function(a){
// return a.age;
// });
// const name= users.map(function(b){
//   return b.name;
//   });
// console.log(name);
// console.log(age);


// forIn loop, usually used for objects
// const users = {
//   firstName: 'Usman',
//   brotherName: 'Farooq',
//   fatherName: 'M Bakhsh',
// }
// for (let x in users){
//   console.log(x) // it displays the keys
// }
// for (let y in users){
//   console.log(`${y}, ${users[y]}`) // it displays the keys
// }



//////////////////////////////////////////////////////////////////



// Alook At Window Object
// Windows Methods / Objects / Properties
// console.log(123);
// window.console.log(123);
// console.log(window);

// alert
// alert('hello world')

// Prompt
// console.log(prompt())

// confirm (used when a person want to delete something)// its output is true or false
// let del = confirm('Are you sure to delete this item?')
// if (del === true){
//   console.log("selected item is deleted")
// }
// else {
// console.log("you do not want to delete this itom")
// }

// let val;
// Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;
// console.log(val)

// inner height and width
// val = window.innerHeight;
// val = window.innerWidth;
// console.log(val)

// Scroll Points// this is used when we want to start any animation according to user scrolling
// let val = window.scrollY;
// val = window.scrollX;
// console.log(val);


// Location Oject
// let val = window.location;
// val = window.location.pathname;
// val = window.location.port;
// val = window.location.protocol;
// val = window.location.search; // it will be discussed latter
// val = window.location.href;


// Redirect
// window.location.href = 'http://google.com'


// relod
// window.location.reload();


// Window  History Object
// window.history.go(-2)// -1 means 1 step move backward, -2 means 2 step move backward and so on


// History Length
// val = window.history.length;


// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform; // it tells about the OS of machine  
// val = window.navigator.vendor; 
// val = window.navigator.language; 


// console.log(val);
