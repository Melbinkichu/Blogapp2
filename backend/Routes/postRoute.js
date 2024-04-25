const express = require('express');
const router = express.Router();
const post = require('../Model/postblog')

router.use(express.json());

//to add blog
router.post('/addblog',(req,res)=>{
    const blog = req.body;
    try {
        const data = post(blog).save();
        res.status(200).json({message:"Blog added",data})
    } catch (error) {
        console.log(error);
        res.json({message:"Unable to add blog"})
    }
})
//viewblog
router.get('/viewall',async(req,res)=>{
    try {
        const data = await post.find();
        res.status(200).json({data})
    } catch (error) {
        
    }
})
//to delete blog
router.delete('/remove/:id',async(req,res)=>{
    try {
        const data = await post.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Blog deleted"})
    } catch (error) {
        res.status(404).send({message:"Blog not found"});
    }
})
//to update blog
router.put('/update/:id',async(req,res)=>{
    try {
        const data = await post.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send({message:"Blog updated"})
    } catch (error) {
        res.status(404).send({message:"Blog not found"})
    }
})

module.exports=router;