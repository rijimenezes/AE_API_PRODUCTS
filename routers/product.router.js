const router  = require('express').Router();

module.exports = (wagner)=>{
     const productCtrl = wagner.invoke((Product)=>require('../controllers/product.controller')(Product));

     router.post('/',(req,res)=> productCtrl.createProduct(req,res));
     router.get('/',(req,res)=> productCtrl.findAll(req,res));
     router.put('/product/:id',(req,res)=> productCtrl.update(req,res));
     router.delete('/product/:id',(req,res)=> productCtrl.deleteProduct(req,res));
     router.get('/product/:id',(req,res)=> productCtrl.findById(req,res));
     return router;
}