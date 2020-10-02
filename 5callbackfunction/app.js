const posts = [
  { title: 'post one ', body: 'this is post one'},
  { title: 'post two ', body: 'this is post two'}
];

// function createPost(post){
// // we'll mimic the server response time with set time out.
// setTimeout(function(){
//   posts.push(post)
// },2000)
// }
// function getPosts(){
// // here we will display the posts in the browser.
// setTimeout(function(){
//   let output = '';
//   posts.forEach(function(post){
//     output += `<li>${post.title}</li>`
//   });
//   document.body.innerHTML = output;
// },1000)
// }
// // first we will create the post, by calling the createPost function and than we will get the posts by calling the getPosts function.
// createPost({title:'post three',body:'this is post three'});
// getPosts();
// // post three will not be displayed, because server took 2 seconds to create the post and 1 second to create the post.
// // this is a pure synchronous way,


// asynchronous way

function createPost(post,callback){
  // we'll mimic the server response time with set time out.
  setTimeout(function(){
    posts.push(post);
    callback();
  },2000)
  }
  function getPosts(){
  // here we will display the posts in the browser.
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  },1000)
  }

createPost({title:'post three',body:'this is post three'},getPosts);

// summary,
// callback is just calling the function within the function. this make it asynchronous.