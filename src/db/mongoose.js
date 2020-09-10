var mongoose=require('mongoose')

mongoose.connect('mongodb+srv://Dharanivel:C9dIfiIN89w9TD6o@cluster0.2259p.mongodb.net/engineering-solution?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
//'mongodb://127.0.0.1:27017/engineering-solution'
