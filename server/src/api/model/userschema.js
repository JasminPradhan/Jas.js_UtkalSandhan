const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userschema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    
    location:{
        type: String
    },

    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Enter a validate email"
        ]
    },

    phoneno:{
        type: Number,
        require: true,
        trim: true,
        minlength:10
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