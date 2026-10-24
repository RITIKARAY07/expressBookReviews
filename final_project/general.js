const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// 1. Retrieve all books using a callback
function getAllBooks(callback) {
  axios
    .get(`${BASE_URL}/`)
    .then((response) => callback(null, response.data))
    .catch((error) => callback(error, null));
}

// 2. Retrieve a book by ISBN/ID using Promises
function getBookByISBN(isbn) {
  return axios
    .get(`${BASE_URL}/isbn/${encodeURIComponent(isbn)}`)
    .then((response) => response.data);
}

// 3. Search books by author using async/await
async function getBooksByAuthor(author) {
  const response = await axios.get(
    `${BASE_URL}/author/${encodeURIComponent(author)}`
  );
  return response.data;
}

// 4. Search books by title using async/await
async function getBooksByTitle(title) {
  const response = await axios.get(
    `${BASE_URL}/title/${encodeURIComponent(title)}`
  );
  return response.data;
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
