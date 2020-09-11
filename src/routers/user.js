const express=require('express')
const User=require('../models/User')
const route=new express.Router()

route.get('/',function(rq,rs){
    rs.render('index.html')
})
route.post('/submit',async function(rq,rs){
    try{
        const user=new User(rq.body)
        await user.save()
        rs.send('<h1>your idea submitted successfully</h1>')
    }catch(e){
        rs.status(500).send(e)
    }
})

module.exports=route