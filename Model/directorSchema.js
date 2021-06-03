const mongoose = require('mongoose');

let Director = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    awardCount:{
        type:Number,
        required:true
    }

    
})

let DirectorModel = new mongoose.model('director',Director)
module.exports= DirectorModel