const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    
    location:{
        type: String
    },

    email:{
        type:String,
        require: true
    },

    phoneno:{
        type: Number,
        require: true,
        minlength: 10
    },

    password:{
        type:String,
        require:true,
        trim:true,
        minlength:4
    }
});

const Userdb = mongoose.model('Userdb',userschema);

module.exports = Userdb;