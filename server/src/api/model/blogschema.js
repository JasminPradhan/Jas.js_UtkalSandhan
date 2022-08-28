const mongoose = require('mongoose');

const blogschema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    }
});

const Blogdb = mongoose.model('Blogdb',blogschema);

module.exports = Blogdb;