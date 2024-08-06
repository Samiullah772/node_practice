const express =require("express")
const app =new express();
const {dbConnection} =require('./connection')
const PORT = 8000;
const Url ='mongodb://127.0.0.1:27017/student';


// database connection
dbConnection(Url);

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const userRoute =require('./Routes/user');
const e = require("express");
app.use('/user',userRoute);

app.listen(PORT,()=>{
    console.log("Server Started");
})