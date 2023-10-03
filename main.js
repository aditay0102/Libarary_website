const myLibrary = [];


function Book(book,author,pages,read){
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function render(){
    let library = document.querySelector(".add");
    library.innerHTML = "";
    for(let i =0;i<myLibrary.length;i++){
        let Book = myLibrary[i];
        let div = document.createElement("div");
        div.setAttribute("class","output")
        div.innerHTML = ` <div class="output">
        <div class="header">
            Book is : <b>${Book.book}</b><br>
            author is : <b>${Book.author}</b><br>
            Pages : <b>${Book.pages}</b><br>
            Rreaded : <b>${Book.read ? "read" : "not read"} </b>
        </div>
        <div class="edit">
            <button class="ebtn" onclick = "toggelread(${i})">edit</button>
            <button class="ebtn" onclick = "removeBook(${i})">delete</button>
        </div>
    </div>
        `;
        console.log(Book.read)
        library.appendChild(div);
    }
}

function addBooktoLibrary(){
    let book = document.querySelector(".book").value;
    let author = document.querySelector(".Author").value;
    let pages = document.querySelector(".pages").value;
    let read = document.querySelector(".read").checked;
    
   let newbook = new Book(book,author, pages,read);
    myLibrary.push(newbook);
    render();
}

function show(){
    addBooktoLibrary();
}

Book.prototype.toggelread = function(){
    this.read = !this.read;

}



function toggelread(index){
    myLibrary[index].toggelread();
    render();
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}

