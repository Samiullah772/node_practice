const mongoose = require('express');
const user =require('../modle/user');


async function handleGetUser(req,res){

    try{
    const usersData =await user.find();

    return res.status(200).send(usersData);
   }catch(e){
    return res.send(e);
   }
}

async function handlePostUser(req,res){
    try{
    const data = req.body;
    const response = await user.create(data);
    return res.status(201).send('User regester Successfully')
    }catch(e){
        return res.send(e)
    }
}



module.exports={
    handleGetUser,
    handlePostUser
}