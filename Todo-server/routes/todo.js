const express = require('express')
const router = express.Router();
const usermiddleware = require('../middleware/user')
const z = require('zod');
const { TodoDb } = require('../db/db');

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

router.get('/Gettodo/:id',usermiddleware, (req,res) => {
    
})

router.patch('/Updatetodo',usermiddleware, (req,res) => {
    
})


router.delete('/DeleteTodo',usermiddleware, (req,res) => {

})


module.exports = router