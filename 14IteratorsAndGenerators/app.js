//Iterators and Generators
//both are different but used in the same way to iterate through something
// we can call a part of a return and pause it and than call the next part and so on,
// so iterators are a kind of advance loops that can be paused and
// generators are the functions that can be paused and can return different values

// Iterator example
// function nameIterator(names){
//   let nextIndex =0;
//   return {
//     next: function(){
//       return nextIndex < names.length ?
//       {value: names[nextIndex++], done: false} :
//       {done: true}
//     }
//   }
// }
// // create an array of names
// const namesArray = ['usman','farooq','ehsan'];
// //initialize the iterator and pass in the names array
// const names = nameIterator(namesArray)

// console.log(names.next().value); // it will return Usman
// console.log(names.next().value); // it will return farooq
// console.log(names.next().value); // it will return ehsan
// console.log(names.next()); // it will return done:true

// Generators Example
// Generators are similar to functions that can return multiple values

// function* sayNames(){
//   // we use 'yield' to return values from it
//   yield 'Usman';
//   yield 'Farooq';
//   yield 'Ehsan';
//   yield 'Ahmad';
// } 
// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());



////////////////////////////////////////////////////

// ID creators
function* createdIDs(){
  let index =0;
  while(true){
    yield index++;
  }
}
const gen = createdIDs();
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
console.log(`input${gen.next().value}`)
