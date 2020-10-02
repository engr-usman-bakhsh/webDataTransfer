// CRUD stands for Create, Read, Update and Delete and these are four basic functions to manipulate data in a database.
// module pattern is sstill not run in the browser. to solve this problem we use the Babel webPack starter kit which is actually a compiler. it transpile the ES2015 plus code down to regular ES5 code;
// webpack is basically used to take modules and its dependencies and generate static assests

// Babel is a javascript compiler that takes the latest versions of javascript and bring them down to ES5

// when we want to use babel we use the modules(official pressets)

// Intro to JS modules
//In JS their are different types of modules
//1- common JS module(used by node js)
// we can use it with webpack instead of using babel
// common JS modules are not included in ES2015 
// a module can be anything. a function, a string etc,



//////////////////////////////////////
// this is the common JS module syntax
// const person = require('./mymodule1');

// this is ES2015 module
// import { person , sayHello } from './mymodule2'; // we can import multiple things


// to import everything from that file
// import * as mod from './mymodule2';

// here mod is a variable and we are getting everything in this   variable

// console.log(mod.person.name);

// console.log(mod.sayHello())


// if we dont want to write curly brackets than we'll use export default in module file
// import greeting from './mymodule2';
// console.log(greeting);

