var mongoose = require('mongoose');

// Genre Schema

var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema)

module.exports.getGenres = function(cb, limit){
    Genre.find(cb).limit(limit);
};

module.exports.addGenre = function(genre, cb){
    Genre.create(genre, cb);
};

module.exports.updateGenre = function(id,genre,options, cb){
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update,options, cb);
};

module.exports.removeGenre = function(id,cb){
    var query = {_id: id};
    Genre.remove(query,cb);
};

