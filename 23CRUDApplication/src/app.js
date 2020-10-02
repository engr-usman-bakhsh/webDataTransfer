import { http } from './http';
import { ui } from './ui'

// content loadded event listeners
document.addEventListener('DOMContentLoaded', getPosts);

// submit Posts
document.querySelector('#post-btn').addEventListener('click',submitPost);

// delete post
document.querySelector(".post-container").addEventListener('click',deletePost)

//Listen for update state
document.querySelector('.post-container').addEventListener('click',enableEditPost);

// cancelling the post
document.querySelector('.container').addEventListener('click',cancelEdittingPost);

function getPosts(){
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err))
}

// submit post
function submitPost(){
  const title = document.querySelector('#post-title').value;
  const body = document.querySelector('#post-body').value;

  const data = {
    title,
    body
  }
  if(title ===  '' || body === ''){
    ui.showAlert('Please fill the all fields','alert-error')  
  }else{
  // create post
  http.post('http://localhost:3000/posts',data)
  .then(data => {
    ui.showAlert('Post Added...','alert-added');
    ui.clearFields();
    getPosts();
    
  })
  .catch(err => console.log(err))
}
}

function deletePost(e){
  e.preventDefault()
  if(e.target.parentElement.classList.contains('delete-btn')){
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are You Sure to Delete this Item')){
      http.delete(`http://localhost:3000/posts/${id}`)
      .then( data => {
        ui.showAlert('Post Deleted','alert-removed');
        getPosts();
      })
      .catch(err => console.log(err))
    }

  }
}

function enableEditPost(e){
  if(e.target.className === 'fa fa-edit'){
    const body = e.target.parentElement.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent
    const postID = e.target.parentElement.dataset.id;

    const data = {
      body,
      title,
      postID
    }
    ui.filForm(data)
    ui.updateButton('green','Update Post');
    ui.createCancelEditButton();
  }

  e.preventDefault();
}

function cancelEdittingPost(e){
  if(e.target.id === 'cancel-post'){
    ui.updateButton('darkslateblue', 'Post It');
    ui.deleteCancelEditingButton();
    ui.clearFields();
  }
  e.preventDefault()
}
