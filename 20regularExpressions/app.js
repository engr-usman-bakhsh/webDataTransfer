// its a very very complex topic,
// a regular expression is basically used to describe the pattern of characters
// so its used for pattern matching and pattern searching
// they are commonly used for validation as well as pulling things out of a body of text or a body of characters
// like email addresses, phone numbers, social security numbers, things that have certain patterns in their formatting,

// here we will discuss about different functions in javascript that are used to evaluate the regular expressions, 

// let re; // re for regular expression,
// re = /Hello/; // this is a regular expression
// re = /Hello/i; // i tag is case insensitive
// re = /Hello/g; // Global search"to search for more than one 'hello'

// console.log(re);
// console.log(re.source)


// here are some functions to evaluate regular expressions

// exec() - will return the result in an array(if there is a match) or null(if there is no match)

// const result = re.exec('Hello World');
 // its work is to check the index number where regular expression is present in given input. here "Hello World" is input.
// index number is 0 in this case

// const result = re.exec('Usman Hello World');
// here index number is 6

// const result = re.exec('Usman Hello World');
// here answer is null because regular expression is case sensitive

// its answer is an array if any extra characters are attached to it.
// for example
// const result = re.exec('Usman Hellohiimhere World'); // index = 6

// to solve this problem we have some meta characters which ensure that there are no other characters attached with input field of our required number. we'll learn about it,


// if we want to do something with certain part of this result, we can do that like

// console.log(result)
// console.log(result[0]);
// console.log(result.index)
// console.log(result.input)
// console.log(result.groups)
// console.log(result.length)


//////////////////////////////////////////////////////////////

// test() - it returns true or false
// const result = re.test('Hello') // true
// const result = re.test('hello') // false
// as we have learnt its a case sensitive, here we are introduced with different tags, "i" tag after regular expression helps us to neglect the upper or lower case letters.

// const result = re.test('Hello') // true
// const result = re.test('hello') // true
// console.log(result)


//////////////////////////////////////////////////////////////
// match() - Reeturns result array or null
// it just like a exec() function but it operates with some other ways
// const str = "hello there";
// const result = str.match(re);
// console.log(result)

//////////////////////////////////////////////////////////////

// search()- it return the index of first match, if not found than it return the -1

// const str = "hello World";
// const result = str.search(re);
// console.log(result) // index 0 returns


////////////////////////////////////////////////////////////

// replace()- Returns a new string with some of all matches of a pattern
// const str = "hello there";
// const newStr = str.replace(re,'hi');
// console.log(newStr)

// we can create our own functions using these to get more custom result