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