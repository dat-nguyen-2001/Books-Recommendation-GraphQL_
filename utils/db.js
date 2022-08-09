const Author = require("../model/Author");
const Book = require("../model/Book");
const ObjectId = require('mongodb').ObjectId;


const db = {
  getAllBooks: async () => {
    return await Book.find();
  },
  getBooksByAuthor: async(id) => {
    const authorId = id.toString();
    return await Book.find({authorId: authorId})
  },
  getAllAuthors: async () => {
    return await Author.find()
  },
  getAuthor: async(id) => {
    const authorId = new ObjectId(id)
    return await Author.find({name: "Higashino Keigo"})
  }
};

module.exports = db;