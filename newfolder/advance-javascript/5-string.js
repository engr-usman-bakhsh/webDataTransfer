let name = `My name is usman`;
let sirName = `My father name is M Bakhsh`;
let purpose = ` I am A student`;

// console.log(name +` `+ sirName + purpose)

let combine = "";
combine = combine.concat(name, ` `, sirName, ' ', purpose);
console.log(combine);
console.log(combine.toLowerCase());
console.log(combine.toUpperCase());
console.log(combine[0]);
console.log(combine.indexOf('s'));
console.log(combine.lastIndexOf('s'));
console.log(combine.lastIndexOf('g'));
console.log(combine.charAt(5));
console.log(combine.endsWith(`student`));
console.log(combine.endsWith(`a`));
console.log(combine.includes(`uman`));
console.log(combine.substring(2, 7));
console.log(combine.slice(-7));
console.log(combine.slice(7));

console.log(combine.split(" ");