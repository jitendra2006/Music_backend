const express = require('express');
const mongoose = require('mongoose');
const app = express();
const filmRoutes = require('./router/filmroutes')
const directorRoutes = require('./router/directorroutes')
const cors = require('cors')
const FilmModel = require('./Model/filmSchema')

app.use(express.json())


// connecting to db

mongoose.connect("mongodb+srv://code-insight:technomean@miniproject.mnio3.mongodb.net/MusicDb?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to db")
})
.catch((err)=>{
    console.log("error occured")
})


app.get('',async (req,res)=>{

    let result = await FilmModel.find()
    res.json(result)
})

// post user data


    
app.post('/',async(req,res)=>{

    // res.send("hello post")
    console.log("api works")
    // console.log(req.body)
    let film = FilmModel({
        name:req.body.firstName + " " + req.body.lastName,
        dob:req.body.dob,
        instrument:req.body.selectbox,
        days:req.body.days,
        comment:req.body.textarea
    })

    console.log(film)

    let result = await film.save()
    res.json(result)

})




app.listen(8000,()=>{
    console.log("listing at 8000")
    
})
