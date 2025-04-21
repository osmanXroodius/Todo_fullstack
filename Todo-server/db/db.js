const mongoose = require('mongoose');

require('dotenv').config();
const DBlink = process.env.DBLINK;
console.log(DBlink)

mongoose.connect(DBlink).then(() => console.log("db connected")).catch((err) => console.error(err))

const userSchema = new mongoose.Schema({
    username:String,
    password:String
})

const todoSchema = new mongoose.Schema({
    title:String,
    description:String
})

const UserDb = mongoose.model('UserDb',userSchema)
const TodoDb = mongoose.model('TodoDb', todoSchema)

module.exports = {
    UserDb,
    TodoDb
}