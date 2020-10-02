// this will be used to test the created library.
const http = new easyHTTP;

// Get Posts
const posts = http.get('https://jsonplaceholder.typicode.com/posts');
console.log(posts);

// undefined error will be generated, we have to resolve this by using callback functions,
// undefined is due to data is returned before we added.
// we have to solve it by using the aysnchronous way

// i am commenting the upper const and adding new in below

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
  if(err){
    console.log(err)
  }else{
    console.log(posts)
  }
})


// GET single Posts
http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
  if(err){
    console.log(err)
  }else{
    console.log(post)
  }
})


// Create Data
const data = {
  title:'Custom Post',
  body: 'this is a custome post'
}

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
  if(err){
    console.log(err)
  }else{
    console.log(post)
  }
})

// Update Post 
http.put('https://jsonplaceholder.typicode.com/posts/1',data , function(err,post){
  if(err){
    console.log(err)
  }else{
    console.log(post)
  }
})

// Delete Request
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
  if(err){
    console.log(err)
  }else{
    console.log(response)
  }
})