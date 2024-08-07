const express =require("express")
const app =new express()
const {dbConnection} =require('./connection')
require('dotenv').config()
const port =process.env.PORT
const mongoatlasUrl =process.env.mongoURL
const Url ='mongodb://127.0.0.1:27017/student';


// database connection
dbConnection(mongoatlasUrl);

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const userRoute =require('./Routes/user');
const e = require("express");
app.use('/user',userRoute);

app.listen(port,()=>{
    console.log("Server Started");
})