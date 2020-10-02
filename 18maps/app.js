// Maps are new objects in ECMAScript 6
// A map is an object that holds key value pairs or any value weather its an object, object refference type or a primitive type can be used as a key and value, which is very different than just an object litteral,
// we can actually use an object as a key


// MAPS = key-value pairs and we can use any type as a key or value

// const map1 = new Map();

// // set keys
// const key1 = 'some string',
//       key2 = {},
//       key3 = function(){};
// //
// // Set Map values by keys
// map1.set(key1,'value of key1')
// map1.set(key2,'value of key2')
// map1.set(key3,'value of key3')

// get values by keys
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));


// we can also count the values inside the MAP
// console.log(map1.size)

// Iterating through Maps


// Loop using for...of(we can get either the keys or the values or both)
// we are getting keys and the values here

// for(let [key , value] of map1){
//   console.log(`${key} = ${value}`)
// }



// iterate keys only
// for(let key  of map1.keys()){
//   console.log(`${key}`)
// }



// iterate values only
// for(let value of map1.values()){
//   console.log(`${value}`)
// }


// we can also use forEach loop
// map1.forEach(function(value,key){
//   console.log(`${key} = ${value}`)
// })


// convert maps to an Arrays
// // create an array of key value pairs
// const keyValArray = Array.from(map1);
// console.log(keyValArray)



// // create an array of the values
// const valArray = Array.from(map1.values());
// console.log(valArray)



// // create an array of the keys
// const keyArray = Array.from(map1.keys());
// console.log(keyArray)
