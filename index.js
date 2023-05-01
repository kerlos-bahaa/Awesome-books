import AwesomeBooks from './modules/first.js';
import timeNow from './modules/date.js';

const awesomeBook = new AwesomeBooks();
awesomeBook.removeItem();
document.getElementById('add').addEventListener('click', () => {
  awesomeBook.adding();
});

document.getElementById('bookInput').style.display = 'none';
document.getElementById('contactInfo').style.display = 'none';

document.getElementById('listLink').addEventListener('click', () => {
  document.getElementById('bookInput').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'none';
  document.getElementById('bookList').style.display = 'block';
});

document.getElementById('inputLink').addEventListener('click', () => {
  document.getElementById('bookList').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'none';
  document.getElementById('bookInput').style.display = 'block';
});
document.getElementById('contactLink').addEventListener('click', () => {
  document.getElementById('bookInput').style.display = 'none';
  document.getElementById('bookList').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'block';
});
window.awesome_books = awesomeBook;
timeNow();
