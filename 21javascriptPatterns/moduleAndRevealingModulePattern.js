// there is a slight variation in module pattern which makes it reveal module pattern
// ES6 has introduced actual modules in javascript means that we can use separate files to export modules which are just custom pieces of code and import them into a new file,However its still not supported in browser. for this we have to use a compiler like Babel along with a module loader like web pack  for that to work and we'll be getting it to back latter

// in ES5  we have module pattern that allows us to break up parts of our code into self-contained moduleswith private properties and methods or private variables and  functions


// Basic Structure
// (function(){
//   // declare private variables and functions
//   // private means we cannot acces them from outside the module

//   return {
//     // Declare public variables and functions
//   }
// })(); // this is the simple blueprint of module pattern
// we can access these private variables and functions from this public portion


// Standard module pattern
const UIController = (function() {
    let text = ' hello world';
    // this is private portion
    const changeText = function() {
        const element = document.querySelector('h3');
        element.textContent = text;

        // this is private function
    }

    return {
        // this is public portion
        callChangeText: function() {
            changeText();
            console.log(text)
        }
    }
})();
UIController.callChangeText()
    // console.log(UIController.text); //  it returns undefines, we cannot acces private function from outside the module
    // console.log(UIController.changeText()); //  it returns erro(changeText() is not a function), we cannot acces private function from outside the module


// Revealing module function
// the main difference is that instead of returning our own public functions, you basically map an object litteral and you map to private functions that you want to reveal, thats called its a revealling pattern because you reveal certain methods from your module

const itemController = (function() {
    let data = []; // its just a custom to use underscore before a private variable
    function add(item) {
        data.push(item);
        console.log('Item Added.....');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        })
    }

    return {
        // using object litterals
        add: add,
        get: get
    }
})();

itemController.add({ id: 1, name: 'usman' }); // item added
itemController.add({ id: 2, name: 'farooq' }); // item added

console.log(itemController.get(1));
console.log(itemController.get(2));

// ()(); this is called iffy