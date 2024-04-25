const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://melbin_kichu:Melbin@cluster0.wsqd82l.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err)
})