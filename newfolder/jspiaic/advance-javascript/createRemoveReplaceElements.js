console.log("hi, i am going to practice the creating, removing and replacing elements.");
// let newHeadingCreated = document.createElement('h3');
// newHeadingCreated.className = 'sub-heading-h2';
// newHeadingCreated.id= ' sub-heading-h2';
// newHeadingCreated.innerText = "this is subheading"
// let heading= document.querySelector('#heading');

// heading.appendChild(newHeadingCreated);





//  another way to create an element




// let newHeadingCreated = document.createElement('h6');
// let text = document.createTextNode("this is another heading");
// let heading = document.querySelector("#heading")

// newHeadingCreated.appendChild(text);
// heading.appendChild(newHeadingCreated)
// console.log(heading)

// How to replace an Element?


// let newHeadingCreated = document.createElement('h1');
// let text = document.createTextNode("this is another heading which is replacing the previous");
// let heading = document.querySelector("#heading")

// newHeadingCreated.appendChild(text);
// heading.replaceWith(newHeadingCreated)
// console.log(heading)



// How to replace existing element without making new element??


// let myid = document.getElementById('eat');
// myid.replaceWith("mutton", myid)


// Removing an element
let myId = document.getElementById('interest');
myId.removeChild(document.getElementById('eat'))