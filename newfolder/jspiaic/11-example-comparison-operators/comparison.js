var a=3;
console.log(Number(a == 6)); //0
console.log(Number(a === 6)); //0
console.log(Number(a != 6)); //1
console.log(Number(a !== 6)); //1
console.log(Number(a > 6)); //0
console.log(Number(a < 6)); //1
console.log(Number(a >= 6)); //0
console.log(Number(a <= 6)); //1
console.log("checking the behaviour of == and ===")
console.log(Number(a == 3)); // 1
console.log(Number(a == "3")); // 1 its not considering the data type
console.log(Number(a == 6)); // 0

console.log(Number(a === 3)); // 1
console.log(Number(a === "3")); // 0 its considering the data type also
console.log(Number(a === 6)); // 0



console.log(true == 1); // true 