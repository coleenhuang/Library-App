let myLibrary = [];
const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('form submitted')
    addBooktoLibrary()
    console.log(myLibrary)
    console.log(myLibrary[0].title)
  });
const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");

function Book(title, author, status) {
    //the constructor
    this.title = title;
    this.author = author;
    this.status = status;
    this.info = function () {
        return `${title} by ${author}, ${pages}, ${status}`
    }
}

function addBooktoLibrary() {
    //take form input and add a new book
    let newBook = new Book($title.value, $author.value, $status.value)
    myLibrary.push(newBook);
}


function deleteBook() {
    //remove book from library
}

function toggleStatus() {
    //toggles read status
}