const express =require('express')
const router =new express.Router()
const {handleGetUser,handlePostUser}=require('../controller/user')


router.route('/').get(handleGetUser).post(handlePostUser)


module.exports =router;