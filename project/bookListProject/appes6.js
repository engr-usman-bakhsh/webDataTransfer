class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {

  addBookToList(book) {
    const container3 = document.getElementById('container3');

    // create div element for output
    const div = document.createElement('div');

    // add class
    div.className = 'output';

    // add li elementsin div
    div.innerHTML =
      `<li>${book.title}</li>
    <li>${book.author}</li>
    <li>${book.isbn}</li>
    <li><input type="button" value="X" class="crossButton"></li>`
    container3.appendChild(div);
  }

  showAlert(message, className) {
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
  deleteBook(target) {
    // console.log(target)
    if (target.className === 'crossButton') {
      target.parentElement.parentElement.remove()
      // instantiate UI
      const ui = new UI();
      // show alert
      ui.showAlert('book deleted successfully', 'success')
    }
  }
  clearFields() {
   const title = document.querySelector('#title').value = '';
   const author = document.querySelector('#author').value = '';
   const isbn = document.querySelector('#isbn').value = '';
  }
}
// Add books to Local Storage
class Store {
  static getBooks(){
    let books;
    if (localStorage.getItem('books')===null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI();

      // add book to UI
      ui.addBookToList(book);
      // this need another event listner
    })

  }
  static addBooks(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBooks(isbn){
    const books = Store.getBooks();

    books.forEach(function(book,index){
     if (book.isbn === isbn){
       books.splice(index,1);
     }
    });
    localStorage.setItem("books", JSON.stringify(books));

  }
}
//DOM Load Event
document.addEventListener('DOMContentLoaded',Store.displayBooks)


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

    // add book to local storage
    Store.addBooks(book);
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

  // remove from LS
  Store.removeBooks(e.target.parentElement.previousElementSibling.textContent)

  e.preventDefault();
})