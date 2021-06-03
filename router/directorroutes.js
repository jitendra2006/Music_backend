const express = require('express')
const router = express.Router()
const DirectorModel = require('../Model/directorSchema')

// getting the director list
router.get('/',async (req,res)=>{

    const result = await DirectorModel.find();
    console.log(result)
    res.json(result)
    // console.log("helo")
})

router.put('/:id',async (req,res)=>{
    console.log("patch")
    let data = req.body
    console.log(data)
    let id = req.params.id;
    let mname = req.body.name;
    let result = await DirectorModel.updateOne({ _id: id }, { $set: { name: mname } });
    console.log(result);
    res.send(result)
})

// getting details of perticular director
router.get('/:id',async(req,res)=>{
    console.log("current film api")

    let id = req.params.id
    let result = await DirectorModel.findOne({_id:id})
    res.json(result)
    res.send("perticular movie details")
})


// getting details of perticular director
router.get('/:id',(req,res)=>{
    res.send("perticular director details")
})

// save the director in db

router.post('/',async(req,res)=>{
    console.log(req.body)
    let director = DirectorModel({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        awardCount:req.body.award
    })
    console.log(director)
    let result = await director.save()
    res.json(result);


    // director.save((err,data)=>{
    //     if(data){

    //         res.send(err)
    //     }
    //     if(err){

    //         res.send(err)
    //     }
    // })
    // res.send("post works")
})


// update the director
router.patch('/:id',(req,res)=>{
    res.send("patchwork")
})

// Delete the director from db
router.delete('/:id',async (req,res)=>{
    let id = req.params.id
    // console.log(req.params.id)
    let result = await DirectorModel.deleteOne({_id:id},(err)=>{
        if(err){
            console.log("err")
        }
        console.log("deleted")
    })
    res.json(result)
    res.send("delete works")
})


module.exports = router;