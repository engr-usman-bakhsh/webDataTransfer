// Async and Await are actually of ES7(2017) standards but are fully implemented in chrome browser
// how to doo the same stuff using webPack and Babble? we'll learn it latter.

// function myFunc(){
//   return 'hello';
// }
// console.log(myFunc());


// if we add async before function it will return a promise

// async function myFunc(){
// const promise = new Promise((resolve,reject) => {
//   setTimeout(() => resolve('Hello'), 2000);
// });
// const res = await promise;   // await, waits the promise to be resolved untill it actually sends the response.
// return res;
// }
// myFunc()
//   .then(res => console.log(res))



// // Fabricating an error
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 2000);
//   });
//   const error = false;
//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'))
//   }
// }
// myFunc()
//   .then(res => console.log(res))
//   .catch (err => console.log(err))



/////////////////////////////////////////////////////////////////
// here is the best example for async and await using fetch

async function getUsers(){
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceeds once its resolved
  const data = await response.json();

  // only proceeds once second promise resolved
  return data;
}

getUsers().then(user => console.log(user))