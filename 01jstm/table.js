document.querySelector('#button').addEventListener('click',getTable);


function getTable(){
  const table = parseInt(document.querySelector('#table').value),
        tableLength = parseInt(document.querySelector('#tableLength').value);
//
let output = '';

if(isNaN(table)|| isNaN(tableLength)){
  output += `<p>Please enter the values in both field</p>`
}else{
  for(var i = 1  ; i<=tableLength ; i++){
    output += `<p>${table} X ${i} = ${table*i}</p>`
}
}
document.querySelector('#output').innerHTML = output;
}



