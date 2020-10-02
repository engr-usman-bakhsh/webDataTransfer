var num = parseInt(prompt("enter a number, i'll display prime numbrs upto it"));
var isPrime = true;

for(var i = 2 ; i < num ; i++ ) {
    var div = num % i;
    if (div == 0 ){
        console.log(num+" is not prime ")
        isPrime = false;
        break;      
    }
}
if (isPrime == true){
    console.log(num+" is prime ")
}
