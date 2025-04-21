const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
console.log(PORT)


// app.use('user',)
// app.use('todo',)






app.listen(PORT, () => console.log(`server Running on port ${PORT}`))








