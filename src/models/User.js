const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    problem:{
        type:String,
        trim:true
    },
    purchase:{
        type:String
    },
    contact:{
        type:String
    }
})
const User=mongoose.model('User',userSchema)

module.exports=User