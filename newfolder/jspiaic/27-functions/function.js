
// argument passed by value
var arr = [1, 2, 3, 4];
function updateArray(val){
    val[1]=50;
}
console.log(arr[1]);
updateArray(arr);
console.log(arr[1]);


/*


// recursive function

function factorial(a){
    if (a <= 1 ){
        return 1 ;
    }
    else {
        return a * factorial(a - 1);
    }
}
a = prompt(" enter the number whose factorial you want to find");
console.log(factorial(a));


var a = 5;
function changeVlaue(b){
    b = 7;
}
console.log(a);
changeVlaue(a);
console.log(a);



/*var sum = function(num1, num2){
    return num1 + num2 ;
};

var c = sum(3 , 9);
console.log(c);

/*var a;
console.log(a);
a = 6;
console.log(a);

/*
// function example
console.log("Before Function");

function showMesage(){
    console.log("hello world")
}
console.log("After Function");
 showMesage();
console.log("After Function calling");


// pasing value to function

function multiply(num1, num2){
    var num3 = num1 * num2;
    console.log(num3);
}

multiply(2,4);
multiply(4,43);
 */