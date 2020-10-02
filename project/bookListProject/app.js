//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() { }
// add book to list
UI.prototype.addBookToList = function (book) {
  const container3 = document.getElementById('container3');

  // create div element for output
  const div = document.createElement('div');

  // add class
  div.className = 'output';

  // add li elements in div
  div.innerHTML =
    `<li>${book.title}</li>
     <li>${book.author}</li>
     <li>${book.isbn}</li>
     <input type="button" value="X" class="crossButton">`
  container3.appendChild(div);
}

// show messages
UI.prototype.showAlert = function (message, className) {
  // create p element
  const div = document.createElement('div');
  // Add class
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // select parent
  const heading = document.getElementById('heading');
  // append paragraph in DOM
  heading.appendChild(div);
  // select br tag
  const br = document.querySelector('br');
  //hide the br element
  br.style.display = 'none';

  // hide the element after 2 seconds
  setTimeout(function () {
    const alert = document.querySelector('.alert').remove();
    br.style.display = 'block'
  }, 2000)
}

// delete book prototype
UI.prototype.deleteBook = function (target) {
  // console.log(target)
  if (target.className === 'crossButton') {
    target.parentElement.parentElement.remove()
    // instantiate UI
    const ui = new UI();
    // show alert
    ui.showAlert('book deleted successfully', 'success')
  }
}

// clear fields
UI.prototype.clearFields = function () {
  const author = document.querySelector('#author').value = '';
  const title = document.querySelector('#title').value = '';
  const isbn = document.querySelector('#isbn').value = '';
}

// load event listner
document.querySelector('#book-form').addEventListener('submit', function (e) {
  //Get Form Values
  const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

  // instantiate UI
  const ui = new UI();

  // alert
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please Add All the Fields', 'error')
  }
  else {
    // instantiate book
    const book = new Book(title, author, isbn);

    // add book to list
    ui.addBookToList(book);

    // book added successfully
    ui.showAlert('Book Added Successfully', 'success')
    // clear the fields
    ui.clearFields();

  }
  e.preventDefault();
})

// event listner for delete
document.querySelector('body').addEventListener('click', function (e) {
  // instantiate UI
  const ui = new UI();
  // prototype for delete book
  ui.deleteBook(e.target)

})