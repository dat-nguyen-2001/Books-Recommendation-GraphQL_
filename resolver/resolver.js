const db = require('../utils/db');
const {getAllBooks, getBooksByAuthor, getAllAuthors, getAuthor} = db;

const resolvers = {
  // QUERY
  Query: {
    books:  () => getAllBooks(),
    authors:  () => getAllAuthors(),
  },

  Book: {
    author: (parent, args) => getAuthor(parent.authorId),
  },
  Author: {
    books: (parent, args) => getBooksByAuthor(parent._id),
  },

  //MUTATION
  Mutation: {
    createAuthor: async (parent, args) => {
      const newAuthor = new Author(args);
      return await newAuthor.save();
    },
    createBook: async (parent, args) => {
      const newBook = new Book(args);
      return await newBook.save();
    },
  },
};
module.exports = resolvers;
