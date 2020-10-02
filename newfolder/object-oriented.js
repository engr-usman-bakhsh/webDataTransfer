// Object Oriented programming in javascript
// in object oriented programming the "this" keyword and "constructor" are most important.
// let intro = {
//   name: 'usman',
//   age: 25,
// }
// console.log(intro);
// console.log(intro.name);
// console.log(intro.age);
// // this is just a single object or instance, if we are working with multiple instances or objects than we have to use the constructor.
// constructor is just like a function but its first letter should be capital.



// Person constructor
// function Person(){
//   this.name = "usman";
// }

// this is a simple constructor, we can instantiate a person object from it,
// const usman = new Person();
// const farooq = new Person();

// console.log(usman)
// console.log(farooq) // its name is also usman because we have hardcodded it
// now we'll pass an argument in the constructor like



// Person constructor
// function Person(name){
//   this.name = name;

// }

// this is a simple constructor, we can instantiate a person object from it,
// const usman = new Person('usman');
// const farooq = new Person('farooq');

// console.log(usman)
// console.log(farooq) 


// here 'this' keyword is very important, it tells about the current instance of the object
// here this 'this' is in the function scope,  we can use it outside the function scope.
// write it in the function scope

// function Person(name){
//   this.name = name;
//   console.log(this); // it will display the both two instances   
// }

// outside the scope it gives us the window object

// console.log(this);
// this.alert(1)


// // pass more arguments init
// function Person(name,age){
//   this.name = name;
//   this.age = age;
//   // console.log(this); // it will display the both two instances   
// }
// const usman = new Person('usman',25);
// const farooq = new Person('farooq',30);

// console.log(usman.age)





// pass date object  init
// function Person(name,dob){
//   this.name = name;
//   this.birthday = new Date(dob)
//   // console.log(this); // it will display the both two instances   
// }
// const usman = new Person('usman','05-17-1995');
// const farooq = new Person('farooq','12-22-1991');

// console.log(usman.birthday);
// console.log(usman);



// we can create a metthod inside this constructor, method means to call a function inside the constructor

// function Person(name,dob){
//   this.name = name;
//   this.birthday = new Date(dob)
//   this.calculateAge = function (){
//     const diff =  Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     // return Math.abs(ageDate.getUTCFullYear()- 1970);
//     return Math.abs(ageDate.getUTCFullYear()- 1970);

//   }
//   // console.log(this); // it will display the both two instances   
// }
// const usman = new Person('usman','05-17-1995');
// const farooq = new Person('farooq','12-22-1991');

// console.log(usman);
// console.log(usman.calculateAge());

//////////////////////////////////////////////////////////////////


// String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// //name2.foo = 'bar';
// // console.log(name2);

// console.log(typeof name2);

// if(name2 === 'Jeff'){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function(x, y){
//   return x + y;
// }

// const getSum2 = new Function('x','y', 'return 1 + 1');

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john2);

// // Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);


//////////////////////////////////////////////////////////////////


// prototypes
// each object in javascript has a prototype and prototype is an object itself
// all objects inherit their properties and methods from ptototypes,
// when we are dealing with objects literals than we are inheriting from a prototype called object.prototype.
// and when we are dealing with the objects that are constructed through a constructor like we did with Person constructor, its gonna come from person.prototype

// person.prototype

//object.prototype

// function Person(firsNname,lastName , dob){
//   this.firstName = firsNname;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function (){
//   //   const diff =  Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear()- 1970);
//   // }
// }
// // calculate age prototype

// Person.prototype.calculateAge = function (){
//   const diff =  Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear()- 1970);

// }

// // one more prototype Get Full Name
// Person.prototype.getFullName = function (){
//   return `${this.firstName} ${this.lastName}`
// }



// // Next Sibling
// Person.prototype.nextSibling = function( newFirstName){
//   this.firstName = newFirstName;
// }

// const usman = new Person('usman','bakhsh','may 17 95');
// const farooq = new Person('farooq','bakhsh','december 22 91');

// console.log(usman);

// console.log(usman.calculateAge());
// console.log(usman.getFullName());

// usman.nextSibling('farooq');

// console.log(usman.getFullName());



// console.log(farooq);
// console.log(farooq.calculateAge());
// console.log(farooq.getFullName());
// farooq.nextSibling('usman')
// console.log(farooq.getFullName());
// farooq.nextSibling('ehsan')
// console.log(farooq.getFullName());

// console.log(farooq.hasOwnProperty('firstName')); // true return 
// console.log(farooq.hasOwnProperty('getFullName')); // false return because it stored as a prototype its not actually the part of its own property


// forEach loop cannot be implemented on prototype objects

////////////////////////////////////////////////////////////////


// prototypical inheritance


// function Person (firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function (){
//   return `${this.firstName} ${this.lastName} Welcom Sir`
// }

// Person.prototype.family = function(){
//   return ` ${this.firstName} ${this.lastName} All is Well Sir`
// }
// const person1 = new Person('usman','bakhsh');
// console.log(person1.greeting())


// console.log(person1.family())

// // Customer Constructor
// function Customer(firstName,lastName,phone,membership){
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }
// // inherit the persons prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;


// const customer1 = new Customer('farooq','bakhsh','555-555-555','standard');

// Customer.prototype.greeting = function(){
//   return `${this.firstName} ${this.lastName} welcom bhai jan`
// }
// console.log(customer1);
// // we want to inherit the customer1.greeting()
// console.log(customer1.greeting()) // it is inherited in 262 line

// // family propert inherited sir
// console.log(customer1.family());



// any prototype method which we add to the Person will be accessible by Customer



///////////////////////////////////////////////////////////////

// another way to create object using object.create
// we are going to be able to creates prototypes inside of a kind of parent Object

// const prototype = {
//   greeting: function(){
//     return  `Hello There ${this.firstName} ${this.lastName}`
//   },
//   nextSibling: function (newFirstName) {
//     this.firstName = newFirstName;
//   }
// }
// const name = Object.create(prototype);
// name.firstName ='usman';
// name.lastName = 'bakhsh';
// name.age = 25;

// console.log(name.greeting())

// name.nextSibling('farooq');

// console.log(name.greeting());

// // another syntax

// const name2 = Object.create(prototype,{
//   firstName: {value: 'farooq'},
//   lastName: {value: 'bakhsh'},
//   age: {value: 25}
// })
// console.log(name2);
// console.log(name2.greeting())



///////////////////////////////////////////////////////////////
// IN ES6 there is an easy syntax for creating objects
// we will use classes to create objects, its a very convenience method to create objects,prototypes methods etc

// class Person{
//   constructor (firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   // make a greeting
//   greeting(){ // this will be shown as prototype
//     return `Hello there ${this.firstName} ${this.lastName}`
//   }
// }

// const  name = new Person('usman','bakhsh');

// console.log(name)
// console.log(name.greeting())


// now we will find the date of birth
// class Person{
//   constructor (firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob)
//   }
//   // make a greeting
//   greeting(){ // this will be shown as prototype
//     return `Hello there ${this.firstName} ${this.lastName}`
//   }
//   calculateAge(){
//     const diff = Date.now()-this.birthday.getTime()
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()-1970)
//   }
//   nextSibling(newFirstName){
//     this.firstName=newFirstName;
//   }
//   /// static methos
//   static addNumbers(x,y){
//     return x+y;
//   }
// }

// const  name = new Person('usman','bakhsh','may 05 1995');

// console.log(name)

// console.log(name.greeting())


// name.nextSibling('farooq');


// console.log(name.greeting())


// console.log(name.calculateAge())


// this static method cannot be accessed as we access others like
// console.log(name.addNumbers(2,3))// it will generate an error

// we will use the class name instead of object name to access it like
// console.log(Person.addNumbers(3,4)) // its working



///////////////////////////////////////////////////////////////
// how do we use inheritance in ES6 clases

// class Person {
//   constructor(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`
//   }
// }


// const person1 = new Person('Usman','Bakhsh');
// console.log(person1);
// console.log(person1.greeting());

// // create second class 
// // here Person class is extending
// // Customer class is creating as a sub class
// class Customer extends Person{
// constructor(firstName,lastName,phone,membership){
//   // now when we instantiate a customer since its extending a Person we want to call the person constructor and we do that with a function called supper
//   super(firstName,lastName)
//   this.phone = phone;
//   this.membership = membership
// }
// static getMembershipCost(){
//   return 500;
// }
// }

// // creating a customer
// const customer1 = new Customer('farooq','bakhsh','555-555-555','standard');
// console.log(customer1);
// console.log(customer1.greeting());
// console.log(Customer.getMembershipCost())