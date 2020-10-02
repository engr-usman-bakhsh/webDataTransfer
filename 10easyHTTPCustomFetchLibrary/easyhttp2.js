/** 
*
*
*EasyHTTP Library
*Library for making HTTP request
*
*@version 2.0.0
*@author H M Usman
*@client MIT
*
*
**/


// // its in asynchronous way
// class easyHTTP{
//   // make an http GET Request
//   get(url){
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//   }
// }



// // its in synchronous way
// class easyHTTP{
//   // make an http GET Request
//   get(url){
//     fetch(url)
//     .then(res => res.json())
//     .then(data => data)
//     .catch(err => err);
//   }
// }


// Now wrap the whole fetch in a promise
class easyHTTP {
  // make an http GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));

    })
  }

  // make an http POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));

    })
  }


  // make an http PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));

    })
  }

  // make an http DELETE Request
  delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(() => resolve('Resource Deleted......'))
        .catch(err => reject(err));

    })
  }
}