const express = require('express')
const router = express.Router();

const {UserDb,TodoDb} = require('../db/db')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET;




router.post('/signup', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    UserDb.create({
        username,
        password
    })

    res.status(200).json({msg:"You signUp"})

})

router.post('/signin', async (req,res) => {
    const username = req.headers.username
    const password = req.headers.password

   const userExist = await UserDb.findOne({
        username,
        password
    })

    if(!userExist){
        return req.status.json({msg:"Enter Your Username And Password"})
    }else {
        const token = jwt.sign({username}, jwt_secret)
        res.status(200).json({
            YourToken: token
        })
    }
    
})

module.exports = router