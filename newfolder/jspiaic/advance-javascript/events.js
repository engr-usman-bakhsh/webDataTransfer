console.log("this is all about events")
document.getElementById('heading').addEventListener('click', function(e){
    console.log('you have clicked the heading');
    console.log(e);
});

let my_var = 'javascript'
let links  = document.links;
let array = new Array();
Array.from(links).forEach(function(element){
    if(element.href.includes(my_var)){
    array.push(element.href);
}})
console.log(array);