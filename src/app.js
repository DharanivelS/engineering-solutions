const express=require('express')
const bodyparser=require('body-parser')
require('./db/mongoose')
const userRoute=require('./routers/user')
const path=require('path')
const app=express()

const p=path.join(__dirname,'../public')

const port=process.env.PORT || '8080'

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(p))
app.use(userRoute)

app.listen(port,()=>console.log("server is running"))