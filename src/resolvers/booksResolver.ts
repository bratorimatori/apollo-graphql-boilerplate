// Resolvers define how to fetch the types defined in your schema.

import {
  Book,
  MutationAddBookArgs,
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from 'src/__generated__/graphql';
import { ContextValue } from 'src/appContext';

// This resolver retrieves books from the "books" array above.
const queryResolvers: QueryResolvers = {
  Query: {
    books: (
      _: undefined, //Parent
      args: undefined,
      contextValue: ContextValue
    ) => {
      return contextValue.dataSources.booksApi.getBooks();
    },
  },
};

const mutationResolvers: MutationResolvers = {
  Mutation: {
    addBook: (
      _: undefined, //Parent
      args: MutationAddBookArgs,
      contextValue: ContextValue
    ) => {
      const tmp: Book = {};
      return contextValue.dataSources.booksApi.saveBook(args);
    },
  },
};

export const resolvers: Resolvers = { ...mutationResolvers, ...queryResolvers };
