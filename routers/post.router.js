const router  = require('express').Router();

module.exports = (wagner)=>{
     const postCtrl = wagner.invoke((Post)=>require('../controllers/post.controller')(Post));

     router.post('/',(req,res)=> postCtrl.createPost(req,res));
     router.get('/',(req,res)=> postCtrl.findAll(req,res));
    //  router.put('/product/:id',(req,res)=> postCtrl.update(req,res));
    //  router.delete('/product/:id',(req,res)=> postCtrl.deleteProduct(req,res));
    //  router.get('/product/:id',(req,res)=> postCtrl.findById(req,res));
     return router;
}