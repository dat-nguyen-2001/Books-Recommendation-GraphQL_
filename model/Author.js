const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Author = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
})


module.exports = mongoose.model('authors', Author)