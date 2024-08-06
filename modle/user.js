const mongoose =require("mongoose")

// added some functionality in user Schema
const UserSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        lowercase:true
     },
     department:String,
     date:Date
})

const userModel = mongoose.model('userModel',UserSchema,'student')

module.exports = userModel;