const mongoose = require('mongoose');

const blogschema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type:String,
        require: true
    }
});

const Blogdb = mongoose.model('Blogdb',blogschema);

module.exports = Blogdb;