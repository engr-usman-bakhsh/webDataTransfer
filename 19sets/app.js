//sets are usique values 
// its a set of unique values of any type, weather its permitive of refference 

// Store uniqu value of any types
const set1 = new Set();


// Add Values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'usman'});
set1.add(false);

// // console.log(set1)
// // if i want to add 100 again?
// set1.add(100) // it will not be added
// console.log(set1)


// if we dont want to add things in these ways than?
// const set2 = new Set([1, true, 'string']);
// console.log(set2)


// get the size or count?
// console.log(set1.size);

// check for values
// console.log(set1.has(100)); // its answer is true
// console.log(set1.has(50 +50 )); // its answer is true
// one surprising thing?
// console.log(set1.has({name: 'usman'})); // its false, because its a refference type not a premitive,
// its just pointing towards the different memory location in the memory, its not stored in the stack, its stored in the heap(this make it a refference value)
// more interesting thing is that
// console.log({name: 'usman'}==={usman: 'usman'}); // its answer is also false
// console.log('hello'==='hello'); // its answer is true, because its a permitive type



// delete from set
// set1.delete(100);
// console.log(set1);




// we can also iterate through sets


// for...of
// for(let item of set1){
//   console.log(item)
// }

//sets are not key value pairs, these consists on single values if we use set1.value or set1.keys than we'll get the same result
// for(let item of set1.entries()){
//   console.log(item)
// }// its a new thing




// forEach loop
// set1.forEach((value) => {
//   console.log(value)
// })


// convert sets into arrays
const setArray = Array.from(set1);
console.log(setArray)