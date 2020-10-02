const user = {email: 'ehmusman@gmail.com'};


try {
// This will produce a Refference Error
// myFunction(); // we are calling myFunction but we didnt declare my function.

// Produce a TypeError
// null.myFunction();

// Syntax Error
console.log(eval("2+2")); // eval()// its not used too much, it just evaluates the javascript within the string
// ('Hello World'); // Syntax Error
// ('"Hello World"'); // Not Syntax Error, it evaluated it as a string


//Will Produce a URIError
// decodeURIComponent('%')

// we can create our own errors. see the firsl lines
if(!user.name){
  // throw "user has no name";
  
  throw new SyntaxError('User has no name')
  
}

}
catch(e){
  console.log(`User Error:  ${e.message}`);

// console.log(e);
// console.log(e.message); // now refference error wil not show
// console.log(e.name);
// console.log(e instanceof ReferenceError);// it return true
// console.log(e instanceof TypeError);// it return false

}
finally{
  console.log("finally runs regardless of results.....");
}

// the most nice thing about try catch is that we can handle error without stopping the entire script

console.log("Program Continue")// if here we have only 
// myFunction()
// console.log("Programm continu....")
// than it will not work