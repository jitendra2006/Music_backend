const mongoose = require('mongoose');

let FilmSchemaa = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    instrument:{
        type:String,
        rquired:true,
     
    },
    days:[
        {}
    ],
    comment:{
        type:String
    }
    
})

let FilmModel = new mongoose.model('user',FilmSchemaa)
module.exports= FilmModel