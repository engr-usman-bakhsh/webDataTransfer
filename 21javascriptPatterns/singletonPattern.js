//singleton pattern is actually the manifestation of module pattern
// a singleton object is an immediateanonymous functionand it can only return one instance on an object at a time, so repeated call to the constructor will just return the same instance and like the module pattern it also has privaten variables and functions which cannot be accesed from outside 

// why we may want to use a singleton object?
// we may be only want for instance one user object created at a time may be a logged in user, it would prevent you from having two users from being created at once.
// often time singleton are frowned upon because they give you a global point of access rather than embracing and encapsulation and that bothers a lot of programmers and they also be a kind of hard to debug, 
// he said may be singleton may have its place but he didnot used it too much


const singleton = (function(){
  let instance;
  
  function createInstance(){
    // this is not a very practical example
    const object = new Object({ name: 'usman'});
    return object;
  }
  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance()
      }
      return instance
    }
  }
})();

const instanceA = singleton.getInstance();
// if i instantiate another object from singleton?
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB)
// console.log(instanceA)