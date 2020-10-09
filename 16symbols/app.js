// he said we briefly discuss about symbols in data types lecture in second section. but we didn't.
// the unique thing about symbols is that every symbol is very unique and this thing make it valuable as object property identifier
// these are premitive values not constructors, means we can write as
// const sym1 = Symbol();
// not as
// const sym1 = new Symbol();

/////////////////////////////////////////////////
// create a symbol
// const sym1 = Symbol();
// // we can also add an identifier inside the symbol
// const sym2 = Symbol('sym2');
// console.log(sym1,sym2);
// console.log(typeof sym2, typeof sym1);

// no two symbols can be same
// console.log(Symbol()===Symbol()) // answer is false
// console.log(Symbol('123')===Symbol('123')) // answer is false, even if we add same identifier

// it will not work in this way
// console.log(`hello ${sym2}`) // error is, cannot convert a symbol to a string

//it can work in this way
// console.log(`hello ${sym2.toString()}`) // or
// console.log(`hello ${String(sym1)}`) 



///////
// what is the main reason for using behind it?
// unique object keys............
const key1 = Symbol();
const key2 = Symbol('sym2');

const myObj = {};

// if we want to add a variable in object we use following syntax
// myObj.key1 = 'value' // it will consider it as a normal key value pair
// we'll use it in the following way
myObj[key1] = 'prop1' // this is a symbol
myObj[key2] = 'prop2' // this is a symbol
myObj.key3 = 'prop3'; // this is a simple variable
myObj.key4 = 'prop4'; // this is a simple variable
myObj.key5 = 'prop5'; // this is a simple variable

// console.log(myObj)
// console.log(myObj[key1])
// console.log(myObj[key2])

// symbols are not enumerable in for....in loop
// simple for loop is not working

for (let i in myObj) {
    console.log(`${i} : ${myObj[i]}`)
}

// another thing is that symbols aare ignored when we are using JSON.stringify 
// JSON.stringify takes javascrip object litterals and returns it into JSON string


//symbols aare ignored when we are using JSON.stringify 
console.log(JSON.stringify(myObj))
console.log(JSON.stringify({ key: 'prop' }))
console.log(JSON.stringify({
        [Symbol('sym1')]: 'prop' })) // empty object returns