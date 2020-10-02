// here we'will make a simple function of console.log that we tell us if a regular expression contain what we put in or it does not contain what we put in
// Literal characters
let re;
re = /usman/;
re = /Usman/i;

// Metacharacter Symbols
re = /^h/i;  // must start with // this symbol "^" is must start with
re = /usman$/i;  // must ends with| this symbol "$" is must ends with
re = /^hello$/i; // must begins and end with
re = /h.llo/i;    // matches any one character, means we can write any one character at the place of dot in string
re = /h*llo/i;    // matches any  character 0 or more times;

re = /gre?a?y/i;   // optional characters/ means we can use e or a
re = /gre?a?y\?/i;   // escape characters// here question mark has become a litteral

////////////////////
// Brackets[]- character sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/; // must be a G or F
re = /[^GF]ray/i; // must match anything except a G or F;
// inside ^ means is not.
re = /[A-Z]ray/; // here we can do a range, match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; //match any letter
re = /[1-9]ray/; //match any digit

/////////////////////////////////////////////////////////

// Braces {} - Quantifiers
re = /Hel{2}o/i;  // character before braces should be repeat twice(equal to the number with in braces)
// must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // ranges must between 2 and 4
re = /Hel{2,}o/i; // must occur atleast 2 times(means l should occur minimum two times)

//////////////////////////////////////////////////////////
// parantheses () -  use for Grouping
re = /([0-9]x){3}/;
// its mean is that a number between 0 and 9 is followed by x and it should be of atleast three times//  here more 4x will also work, how to limit these in 3 times?
re = /^([0-9]x){3}$/;
// ^ (carrot) and $(money sign) are the most used symbols in regular expressions

////////////////////////////////////////////////////////////////

// Short hand character classes
re = /\w/;  // word character - alphanumeric or _
re = /\w+/;  // + =  one or more word characters
// in str "! or () or @" are not going to match
re = /\W/;  // Non-word character 
// in str "! or () or @" are going to be matched
re = /\d/;  // match any digit 
re = /\d+/;  // match any digit 0 or more times
re = /\D/;  // match any non-digit
re = /\s/;  // match whiteSpace characters
re = /\S/;  // match Non-whiteSpace characters
re = /Hell\b/i;  // this is a word boundary (only Hell will be searched)
 
////////////////////////////////////////////////////////////
// Assertions (are kind of like conditions)
re = /x(?=y)/i; // match x only if it is followed by y
re = /x(?!y)/i; // match x only if it is Not followed by y



// String to be matched
// const str = 'Hllo World usman'
const str = 'xc'

// Log result
const result = re.exec(str);
console.log(result)



function reTest(re,str){
if (re.test(str)){
  console.log(`${str} matched with (${re.source})`)
}else{
console.log(`Sorry this string (${str}) does not present in ${re.source}`)
}
}

reTest(re,str)
