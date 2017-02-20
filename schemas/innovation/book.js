// book.js
import Author from './author';

const Book = `
  type Book {
    title: String
    author: Author
  }
`;

export default () => [Book, Author];
