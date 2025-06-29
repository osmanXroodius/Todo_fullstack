const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000
const userRouter = require('./routes/user')
const todoRouter = require('./routes/todo');
const bodyParser = require('body-parser');
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173",
    Credential:true
}))

app.use(bodyParser.json())
app.use('/user', userRouter)
app.use('/todo', todoRouter)


app.listen(PORT, () => console.log(`server Running on port ${PORT}`))
