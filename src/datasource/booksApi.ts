import { Book } from 'src/__generated__/graphql';

class BooksAPI {
  getBooks = () => {
    return [
      {
        title: 'The Awakening',
        author: 'Kate Chopin',
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster',
      },
    ];
  };

  saveBook = (book: Book) => {
    return book;
  };
}

export default BooksAPI;
