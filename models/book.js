var mongoose = require('mongoose');

// Genre Schema

var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = function(cb, limit){
    Book.find(cb).limit(limit);
};

module.exports.getBookById = function(id, cb){
    Book.findById(id, cb);
};

module.exports.addBook = function(book, cb){
    Book.create(book, cb);
};

module.exports.updateBook = function(id,book,options, cb){
    var query = {_id: id};
    var update = {
        title: book.title,
        author: book.author,
        genre: book.genre
    }
    Book.findOneAndUpdate(query, update,options, cb);
};


module.exports.removeBook = function(id,cb){
    var query = {_id: id};
    Book.remove(query,cb);
};
