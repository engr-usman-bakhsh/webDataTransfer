var str = "To be or not To be";
var a = str.indexOf("t");
console.log(a);

var a = str.lastIndexOf("t");
console.log(a);

var a = str.charAt(3);
console.log(a);

var a = str.charCodeAt(7);
console.log(a);

var a = str.replace("be", "hello");
console.log(a);

var a = str.replace(/be/i, "hello");
console.log(a);

var a = str.replace(/be/g, "hello");
console.log(a);

var a = str.replace(/be/gi, "hello");
console.log(a);


var a = str.split(" ");
console.log(a);


var a = str.concat("to");
console.log(a);

var a = str.endsWith("be");
console.log(a);
