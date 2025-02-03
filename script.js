let books = [];

function addBook() {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    
    if (title && author) {
        let currentDateTime = new Date().toLocaleString();
        books.push({ title, author, issued: false, dateTime: currentDateTime });
        updateBookList();
        
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
    } else {
        alert("Please enter book title and author.");
    }
}

function updateBookList() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        let row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.dateTime}</td>
            <td>${book.issued ? "Issued" : "Available"}</td>
            <td>
                ${book.issued ? 
                `<button class="return-btn" onclick="returnBook(${index})">Return</button>` :
                `<button class="issue-btn" onclick="issueBook(${index})">Issue</button>`}
            </td>
        </tr>`;
        bookList.innerHTML += row;
    });
}

function issueBook(index) {
    books[index].issued = true;
    updateBookList();
}

function returnBook(index) {
    books[index].issued = false;
    updateBookList();
}
