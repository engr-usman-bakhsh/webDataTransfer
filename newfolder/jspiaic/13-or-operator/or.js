console.log(1 || 1); //1
console.log(1 || 0);//1
console.log(0 || 1); //1
console.log(0 || 0); //0

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false);// false

var a=60;
var b = a> 50 || a<70;
console.log(b); //true

var c=60;
var d = c> 60 && c<70;
console.log(d); // false
