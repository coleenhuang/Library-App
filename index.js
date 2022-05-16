let myLibrary = [];
const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('form submitted')
    addBooktoLibrary()
    //resets form to default
    document.querySelector('form').reset(); 
  });

const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#table-body")

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
    //take form input and add a item to myLibrary array

    if ($title.value.length === 0 || $author.value.length === 0) {
        //form validation
        alert('Please finish filling out all the fields')
    }
    else {
        let newBook = new Book($title.value, $author.value, $status.value)
        myLibrary.push(newBook);
        console.log('book added')
        render();
    }
    
}


function deleteBook() {
    //remove book from library
}

function toggleStatus() {
    //toggles read status
}

function render() {
        console.log('rendered')
        $tableBody.innerHTML = myLibrary.map(book => {
           return (
               `<tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td><button>${book.status}</button></td>
                    <td><button>Delete</button></td>
                </tr>`
                )
        }).join('')
}