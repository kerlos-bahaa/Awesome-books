let books = [];

// let add = getElementById("add");
let div = document.getElementById("books");

let title = document.getElementById("title");
let author = document.getElementById("author");

function adding(title, author) {
  books.push({ title: title.value, author: author.value });
  localStorage.setItem("Books", JSON.stringify(books));
  let localBooks = JSON.parse(localStorage.getItem("Books"));
  div.innerHTML = "";

  for (let i = 0; i < localBooks.length; i++) {
    div.innerHTML += `
        <h3>${localBooks[i].title}</h3>
        <p>${localBooks[i].author}</p>
        <button id="Remove">Remove</button>
        <br>
        <br>
      `;
  }
  console.log(localBooks);
}

document.getElementById("add").addEventListener("click", () => {
  adding(title, author);
});
// let Remove = document.getElementById("Remove");
document.getElementById("Remove").addEventListener("click", () => {
  let RemoveFunction = JSON.parse(localStorage.getElementById("Books"));
  console.log(RemoveFunction);
});
// add.onclick()=function(){
//   div.innerHTML = ` <h3>Code and Game</h3>
//   <p>Safari Hamuli</p>
//   <button>Remove</button>`;
// }
