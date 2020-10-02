
var question= "what is your age";
var answer=prompt(question); //input age is assumed, 25 but this 25 is string here
var age= parseInt(answer); // now age 25 converted to number data type

console.log("your age is " , age); // your age is 25
newage= age + 5; // 25+5=30
console.log("your age is increased by 5 and new age is ", newage); // your age is increased by 5 and new age is 30


var question= "what is your age in decimal";
var answer=prompt(question); //input age is assumed, 25.5 but this 25 is string here
var age= parseFloat(answer); // now age 25.5 converted to number data type
 
console.log("your age is " , age); // your age is 25
newage= age + 5; // 25.5+5=30
console.log("your age is increased by 5 and new age is ", newage); // your age is increased by 5 and new age is 30.5


var question= "what is your age in decimal or whole number";
var answer=prompt(question); //input age is assumed, 25.5 but this 25 is string here
var age= Number(answer); // now age 25.5 converted to number data type
console.log("your age is " , age); // your age is 25
newage= age + 5; // 25.5+5=30
console.log("your age is increased by 5 and new age is ", newage); // your age is increased by 5 and new age is 30.5



console.log(Number(true)) // answer is 1
console.log(Number(false)) // answer is 0
