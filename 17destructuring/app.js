// Destructuring was introduced in ES6
// it gives us an easy way to assign variables and extract variables from arrays and objects
// its commonly used in REACT
// here we are not using any module, we are using hardcodded data in the same file

// Destructuring Assignment
let a,b;
// [a,b] = [100, 200];
// console.log(a) // we get 100
// console.log(b) // we get 200



// Rest Pattern
// [a,b, ...rest] = [100, 200, 300, 400, 500, 600];
// console.log(a) // we get 100
// console.log(b) // we get 200
// console.log(rest) // we get an array of [300,400,500,600]
// ...rest is called spread operator



// we can do same thing with objects
// here () are used to make it expression
// ({ a, b, ...rest } = {a:100 , b:200, c:300, d:400, e:500});
// console.log(a)
// console.log(b)
// console.log(rest)



// How can we use it in our project?
// we are going to learn the way how to use them

// const people = ['usma','farooq','ehsan']
// const [person1 , person2, person3] = people
// console.log(person1)
// console.log(person2)
// console.log(person3)




// this is array destructuring
// Parse array returned from a function
// function getPeople() {
//   return ['usman','farooq','ehsan'];
// }
// let person1 , person2, person3;
// [person1, person2, person3] = getPeople()
// console.log(person1, person2, person3)



// Object Destructuring
const person ={
  name: 'Usman',
  age: 25,
  city: 'Faisalabad',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello')
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;
//       sayHello = person.sayHello;
  
// console.log(name,age,city,gender)

// New ES6 Destructuring
const {name,age,city,gender,sayHello } = person;
console.log(name,age,city,gender)
// this is much cleaner
sayHello()