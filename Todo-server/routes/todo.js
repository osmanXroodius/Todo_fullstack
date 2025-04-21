const express = require('express')
const router = express.Router();
const usermiddleware = require('../middleware/user')
const z = require('zod')

const todoInputSchema = z.object({
    title:z.string,
    description:z.string    
})

router.post('/addtodo', usermiddleware,(req,res) => {
    
})

router.get('/Gettodo',usermiddleware ,(req,res) => {
    
})

router.get('/Gettodo/:id',usermiddleware, (req,res) => {
    
})

router.patch('/Updatetodo',usermiddleware, (req,res) => {
    
})


router.delete('/DeleteTodo',usermiddleware, (req,res) => {

})


module.exports = router