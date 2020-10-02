document.getElementById("fname").addEventListener('blur',firstName);
document.getElementById("lname").addEventListener('blur',lastName);
document.getElementById("username").addEventListener('blur',userName);
document.getElementById("email").addEventListener('blur',email);
document.getElementById("phone").addEventListener('blur',phone);
document.getElementById("zip").addEventListener('blur',zip);
document.getElementById("password").addEventListener('blur',password);
document.getElementById("confirmPassword").addEventListener('keyup',confirmPassword);

document.getElementById('reset').addEventListener('click',reset);
function reset(){
  location.reload();
}
function firstName(){
  const fname = document.getElementById('fname');
  const re = /^([A-Z][a-zA-Z_\-\.\ ]{3,15})$/;
  if(!re.test(fname.value)){
    const text = "Use first letter capital,Don't use numeric, length should be 4-12";
    if(fname.nextSibling){
      fname.nextSibling.remove();
    }
    if(fname.previousSibling.className === 'tick'){
      fname.previousSibling.remove();
    }
    insertAfter(text,fname)
  }else{
   
    if(fname.nextSibling){
      fname.nextSibling.remove();
      const newText = 'valid'
      validity(newText,fname)
    }
  }
}
function lastName(){
  const lname = document.getElementById('lname');
  const re = /^([A-Z][a-zA-Z_\-\.\ ]{3,15})$/;
  if(!re.test(lname.value)){
    const text = "Use first letter capital,Don't use numeric, length should be 4-12";
    if(lname.nextSibling){
      lname.nextSibling.remove();
    }
    if(lname.previousSibling.className === 'tick'){
      lname.previousSibling.remove();
    }
    insertAfter(text,lname)
  }else{
    if(lname.nextSibling){
      lname.nextSibling.remove();
      const newText = 'valid'
      validity(newText,lname)
    }
  }
}
function userName(){
  const uname = document.getElementById('username');
  const re = /\s/;
  // const length = /{4,20}/;
  if(re.test(uname.value) || uname.value.length === 0){
    const text = "Don't Use Blank Spaces in Username";
    if(uname.nextSibling){
      uname.nextSibling.remove();
    }
    if(uname.previousSibling.className === 'tick'){
      uname.previousSibling.remove();
    }
    insertAfter(text,uname)
  }else{
    if(uname.nextSibling){
      uname.nextSibling.remove();
      const newText = 'valid'
      validity(newText,uname)
    }
  }
}
function email(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)){
    const text = "enter valid format";
    if(email.nextSibling){
      email.nextSibling.remove();
    }
    if(email.previousSibling.className === 'tick'){
      email.previousSibling.remove();
    }
    insertAfter(text,email)
  }else{
    if(email.nextSibling){
      email.nextSibling.remove();
      const newText = 'valid'
      validity(newText,email)
    }
  }
}
function phone(){
  const phone = document.getElementById('phone');
  const re = /^03([0-4][0-9])-([0-9]{7})$/;
  if(!re.test(phone.value)){
    const text = "enter valid format";
    if(phone.nextSibling){
      phone.nextSibling.remove();
    }
    if(phone.previousSibling.className === 'tick'){
      phone.previousSibling.remove();
    }
    insertAfter(text,phone)
  }else{
    if(phone.nextSibling){
      phone.nextSibling.remove();
      const newText = 'valid'
      validity(newText,phone)
    }
  }
}
function zip(){
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if(!re.test(zip.value)){
    const text = "enter valid Zip Code";
    if(zip.nextSibling){
      zip.nextSibling.remove();
    }
    if(zip.previousSibling.className === 'tick'){
      zip.previousSibling.remove();
    }
    insertAfter(text,zip)
  }else{
    if(zip.nextSibling){
      zip.nextSibling.remove();
      const newText = 'valid'
      validity(newText,zip)
    }
  }
}

function password(){
  const password = document.getElementById('password');
  const alphaNumerics = /\w/;
  const characters = /\W/;
  const whiteSpaces = /\s/;

  if(!alphaNumerics.test(password.value) || !characters.test(password.value) || whiteSpaces.test(password.value) || password.value.length <8){
    const text = "Use Special characters and dont use spaces, length must be greater than 8";
    if(password.nextSibling){
      password.nextSibling.remove();
    }
    if(password.previousSibling.className === 'tick'){
      password.previousSibling.remove();
    }
    insertAfter(text,password)
  }else{
    if(password.nextSibling){
      password.nextSibling.remove();
      const newText = 'valid'
      validity(newText,password)
    }
  }
}
function confirmPassword(){
  const confirmPassword = document.getElementById('confirmPassword');
  const password = document.getElementById('password');
  if(password.value !== confirmPassword.value){
    const text = "Password Does Not Match";
    if(confirmPassword.nextSibling){
      confirmPassword.nextSibling.remove();
    }
    if(confirmPassword.previousSibling.className === 'tick'){
      confirmPassword.previousSibling.remove();
    }
    insertAfter(text,confirmPassword)
  }else{
    if(confirmPassword.nextSibling){
      confirmPassword.nextSibling.remove();
      const newText = 'valid'
      validity(newText,confirmPassword)
    }
  }
}
function insertAfter(text,refference){
  const p = document.createElement('p');
  p.className = 'invalid';
  p.appendChild(document.createTextNode(text))
  refference.parentNode.insertBefore(p,refference.nextSibling)
}
function validity(newText,refference){
  const span = document.createElement('span');
  span.className = 'tick';
  span.appendChild(document.createTextNode(newText))
  refference.parentNode.insertBefore(span,refference)
}