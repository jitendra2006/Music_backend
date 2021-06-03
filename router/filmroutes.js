const express = require('express')
const router = express.Router()
const FilmModel = require('../Model/filmSchema')


// getting the films list
router.get('/',async (req,res)=>{

    // console.log("Hi film")
    // res.json({msg:"Hello"})
    // res.send("hello")
    const result = await FilmModel.find();
    res.json(result)
    // console.log(result)
    // res.json(result)
    
})

router.put('/:id',async (req,res)=>{
    console.log("patch")
    let data = req.body
    console.log(data)
    let id = req.params.id;
    let mname = req.body.name;
    let result = await FilmModel.updateOne({ _id: id }, { $set: { name: mname } });
    console.log(result);
    res.send(result)
})

// getting details of perticular film
router.get('/:id',async(req,res)=>{
    console.log("current film api")

    let id = req.params.id
    let result = await FilmModel.findOne({_id:id})
    res.json(result)
    res.send("perticular movie details")
})

// save the film in db

router.post('/',async(req,res)=>{

    // console.log("api works")
    // console.log(req.body)
    let film = FilmModel({
        id:req.body.id,
        name:req.body.name,
        boxOfficeCollection:req.body.collection,
        rating:req.body.rating,
        directors:req.body.director
    })

    let result = await film.save()
    res.json(result)


    // console.log(film)
    // film.save((err,data)=>{
    //     if(data){

    //         res.send(err)
    //     }
    //     if(err){

    //         res.send(err)
    //     }
    // })

})


// update the movie


// Delete the film from db
router.delete('/:id',async(req,res)=>{
    let id = req.params.id
    // console.log(req.params.id)
    let result = await FilmModel.deleteOne({_id:id},(err)=>{
        if(err){
            console.log("err")
        }
        console.log("deleted")
    })
    res.json(result)
})


module.exports = router;