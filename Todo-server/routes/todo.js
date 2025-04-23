const express = require('express')
const router = express.Router();
const usermiddleware = require('../middleware/user')
const z = require('zod');
const { TodoDb } = require('../db/db');
const { json } = require('body-parser');

const todoInputSchema = z.object({
    title:z.string(),
    description:z.string()    
})

router.post('/addtodo', usermiddleware, async (req,res) => {
    const title = req.body.title
    const description = req.body.description

    const allGood = todoInputSchema.safeParse({title,description})
    if(!allGood.success){
        return res.status(403).json({msg:"Enter valid Todo"})
    }

    await TodoDb.create({
        title,
        description
    })

    res.status(200).json({msg:"Todo Added"})
})

router.get('/Gettodo',usermiddleware ,async (req,res) => {
    const todos = await TodoDb.find({})
    res.status(200).json({
        todos
    })
})

router.get('/Gettodo/:id',usermiddleware,async (req,res) => {
    const TodoID  = req.params.id;
    // const Newid  = TodoID.toString();
    const findById = await TodoDb.findById(TodoID)
    
    res.status(200).json({YourTodo : findById});
})
 
router.put('/Updatetodo/:id',usermiddleware, async (req,res) => {
    const TodoID = req.params.id;
    const title = req.body.title
    const description = req.body.description

    try{
const Updatedtodo = await TodoDb.findByIdAndUpdate(TodoID,{
        title:title,
        description:description
    },{new:true, runValidators:true})
    
    if(!Updatedtodo){
        return res.status(403).json({msg:"Todo not Found"})
    }   
    res.status(200).json({Updatedtodo})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }

})


router.delete('/DeleteTodo/:id',usermiddleware,async (req,res) => {
    const TodoID = req.params.id

    try{
        const deleted = await TodoDb.findByIdAndDelete(TodoID)
        if(!deleted){
            return res.status(402).json({msg:"Not Deleted"})
        }else {
            res.status(200).json({mag:"Deleted"})
        }
    }catch(err){
        res.status(500).json({err:err.message})
    }
    
})


module.exports = router;