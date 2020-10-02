var books=["phy","chem","chem"];
console.log(books);

for (var i = 0; i<=3 ; i++){
    var input = prompt("enter the names of books");
    var arr = books.splice(1,0,input);
    console.log(books);
 
}
console.log(books);
console.log(arr)

