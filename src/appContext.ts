import { BaseContext } from '@apollo/server';
import BooksAPI from './datasource/booksApi';

export interface AppContext extends BaseContext {
  // Context typing
  dataSources: {
    booksApi: BooksAPI;
  };
}

export const dataSources = () => {
  return { booksApi: new BooksAPI() };
};

export interface ContextValue {
  dataSources?: { booksApi: BooksAPI };
}
