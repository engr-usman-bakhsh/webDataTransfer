document.getElementById('button1').addEventListener('click', getText);


document.getElementById('button2').addEventListener('click', getJson);


document.getElementById('button3').addEventListener('click', getExternal);

// // GET Text Data
// function getText() {
//     fetch('test.txt') // it returns the data in promise form
//         .then(function(res) { // here we get data
//             return res.text();
//         })
//         .then(function(data) { // here we specifies the text data
//             // console.log(data)
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(function(err) {
//             console.log(err)
//         })
// }

// // GET Json Data
// function getJson() {
//     fetch('posts.json') // it returns the data in promise form
//         .then(function(res) { // here we get data
//             return res.json();
//         })
//         .then(function(data) { // here we specifies the text data
//             // console.log(data)
//             let output = '';
//             data.forEach(function(post) {
//                 output += `<li><span>${post.title}</span>;<span>${post.body}</span></li>`
//             })
//             document.getElementById('output').innerHTML = output;

//         })
//         .catch(function(err) {
//             console.log(err)
//         })
// }


// // GET External Data
// function getExternal() {
//     fetch('https://api.github.com/users') // it returns the data in promise form
//         .then(function(res) { // here we get data
//             return res.json();
//         })
//         .then(function(data) { // here we specifies the text data
//             // console.log(data)
//             let output = '';
//             data.forEach(function(user) {
//                 output += `<li><span>${user.login}</span>;<span>${user.url}</span></li>`
//             })
//             document.getElementById('output').innerHTML = output;

//         })
//         .catch(function(err) {
//             console.log(err)
//         })
// }

// GET Text Data
function getText() {
    fetch('test.txt') // it returns the data in promise form
        .then(res => res.text())
        .then(data => { // here we specifies the text data
            // console.log(data)
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err))
}

// GET Json Data
function getJson() {
    fetch('posts.json') // it returns the data in promise form
        .then(res => res.json())
        .then(data => { // here we specifies the text data
            // console.log(data)
            let output = '';
            data.forEach(post => {
                output += `<li><span>${post.title}</span>;<span>${post.body}</span></li>`
            })
            document.getElementById('output').innerHTML = output;

        })
        .catch(err => console.log(err))
}


// GET External Data
function getExternal() {
    fetch('https://api.github.com/users') // it returns the data in promise form
        .then(res => res.json())
        .then(data => { // here we specifies the text data
            // console.log(data)
            let output = '';
            data.forEach(user => {
                output += `<li><span>${user.login}</span></li>`
            })
            document.getElementById('output').innerHTML = output;

        })
        .catch(err => console.log(err))
}