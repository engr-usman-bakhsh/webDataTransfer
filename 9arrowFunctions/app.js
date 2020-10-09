// // old syntax
// const sayHellow = function(){
//   console.log('Hello')
// }
// sayHellow()


// // with arrow functions
// const sayHellow = () => {
//   console.log('Hello')
// }
// sayHellow()

// // with more simple syntax
// const sayHellow = () => console.log('Hello');
// // one line function does not need braces
// // sayHellow()


// const sayHellow = () => 'hello' // this is equal to
// // const sayHellow = function(){
//   // return 'hello';
// // }
// // here we'will not get the hello in console because we just return in this way not using console.log
// console.log(sayHellow()); // but here it will be printing



// Return object
// we get into trouble when we return an object litteral
// const sayHellow = () => {color: "red"};// it will give undefined because its considering the braces a function braces. it will be resolve by rap it in the parenthesis
// const sayHellow = () => ({color: "red"});
// console.log(sayHellow()); 


// // Single parameter does not need paranthesis
// const sayHellow = name => console.log(`Hello ${name}`)
// sayHellow('Usman'); 

// // more than one parameter need paranthesis
// const sayHellow = (fname,lname) => console.log(`your full name is ${fname} ${lname} `);
// sayHellow('Usman','Bakhsh'); 


// // Simple Functions as a callBack
// const users = ['usman', 'farooq', 'ehsan'];
// const nameLength = users.map(function(name) {
//     return name.length;
// });
// console.log(nameLength);


// Arrow functions as a callback (shorter)
// const users = ['usman','farooq','ehsan'];
// const nameLength = users.map((name) =>{
//   return name.length;
// });
// console.log(nameLength);


// // Arrow functions as a callback (shortest)
// const users = ['usman', 'farooq', 'ehsan'];
// const nameLength = users.map((name => name.length))
// console.log(nameLength);