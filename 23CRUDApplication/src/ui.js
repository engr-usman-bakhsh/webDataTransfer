class UI {
  constructor(){
    this.post = document.querySelector('.post-container');
    this.titleInput = document.querySelector('#post-title');
    this.bodyInput = document.querySelector('#post-body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('#post-btn');
    this.formState = "add";
  }
  showPosts(posts){
    let output = '';
    posts.forEach(function(post){
      output += `
      <div class="posts">
      <div id="post-list">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <span><a href="#" class="edit-btn" data-id="${post.id}"> <i class="fa fa-edit"style="font-size:20px;color: black;"></i> </a>
        </span>
        <span> &nbsp;&nbsp;&nbsp;
        <a href="#" class="delete-btn" data-id="${post.id}" > <i class="fas fa-trash" style='font-size:20px;color: red;'></i></a>
      </span>
      </div>
    </div>
    `
    });
    this.post.innerHTML = output; 
  }

  showAlert(message,className){
    this.clearAlert()
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(message))
    p.classList = `${className} alert`;
    const parent = document.querySelector('.alerts');
    parent.appendChild(p);
    setTimeout(() => {
      this.clearAlert()
    }, 2000);
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }


  }
  clearFields(){
    this.titleInput.value = '';
    this.bodyInput.value = '';
    this.idInput.value = '';
  }
  filForm(data){
    this.clearFields();
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.postID;
  }
  updateButton(color,value){
    this.postSubmit.style.backgroundColor = color;
    this.postSubmit.setAttribute('value',value);
  }
  createCancelEditButton(){
    this.deleteCancelEditingButton();
    const cancelBtn = document.createElement('input');
    cancelBtn.id= 'cancel-post';
    cancelBtn.setAttribute('value','Cancel Editing');
    cancelBtn.setAttribute('type','button');
    
    // select element
    const formEnd = document.querySelector('.form-end');
    formEnd.parentNode.insertBefore(cancelBtn,formEnd.nextSibling)
  }
  deleteCancelEditingButton(){
    if(document.querySelector('#cancel-post')){
      document.querySelector('#cancel-post').remove();
    }
  }
}


export const ui = new UI();