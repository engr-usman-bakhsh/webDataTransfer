/*
var num = [10,20,30,40,50,60,70];
var input = parseInt(prompt("enter a number which you want to search"));
 console.log("user input = "+ input);
 var found = false;

 for (i=0; i< num.length; i++){
    if (num[i] == input){
        console.log("found "+input+" on index "+i);
        found = true;
        break;

    }
}
if (found == false){
    console.log(input+" number is not found");
}



/*
var books=[];

for (i=0; i<=5; i++){
    var a = prompt("enter the name of books");
    books.push(a);
    console.log(books);
    console.log(books.length);

}




*/
var books = ["phy", "chem", "urdu", "eng", "is"];
console.log(books);
console.log(books.length);
var isBookPresent= false;
var find_book =  prompt("enter the name of book which you want to find");
 find_book = find_book.toLowerCase();
for (var i = 0 ; i < books.length ; i++){
    if (find_book === books[i]){
        console.log(" you are searching for "+find_book+"  book and this is present in array at the location of "+i+" index number" );
        isBookPresent= true;
    }
}
if (isBookPresent == false){
    console.log(find_book+" is out of stock");
}

/*
var books = [];
books.push("phy");
books.push("chem");
books.push("eng");
books.push("IS");
console.log(books);
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
books.pop();
console.log(books);
books.push("IS");
console.log(books);
books.shift();
console.log(books);
books.unshift("phy");
console.log(books);
*/