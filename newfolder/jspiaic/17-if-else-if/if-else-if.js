var a = prompt("enter your score");
var score = Number(a);
if (score >=90 && score <=100 ){
    console.log("you have A+ Grade");
}

else if (score <90 && score >=80 ){
    console.log("you have A Grade");
}
else if (score <80 && score >=70 ){
    console.log("you have B Grade");
}
else if (score <70 && score >=60 ){
    console.log("you have C Grade");
}
else if (score <60 && score >=50 ){
    console.log("you have D Grade");
}
else if (score <50 && score >=40 ){
    console.log("you have E Grade");
}
else if (score <40 && score >=0 ){
    console.log("you have F Grade");
}
else {
    console.log("please enter the right value");
    //console.log("this")
}