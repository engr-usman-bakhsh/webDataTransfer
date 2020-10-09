const http = new easyHTTP;

// GET Users // its in asynchronous way
http.get('https://jsonplaceholder.typicode.com/users')

// in synchronous way
const users = http.get('https://jsonplaceholder.typicode.com/users');
console.log(users)


// in asynchronous way Get Data
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// User Data
const data = {
    name: ' Usman',
    username: 'ehmusman',
    email: 'ehmusman@gmail.com'
}

// creat post
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));



// Update post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Delete Users
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));