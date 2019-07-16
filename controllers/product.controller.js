
let _product;
const createProduct = (req,res)=>{
    const product = req.body;
    _product.create(product)
        .then((data)=>{
            
            res.status(200);
            res.json({msg:'Producto creado correctamente',data:data});
            
        })
        .catch((err)=>{
            res.status(400);
            res.json({msg:'Error!!!',err:err});
        });
};
const findAll = (req,res)=>{
   
    _product.find()
        .then((data)=>{
            if(data.length > 0){

                res.status(200);
                res.json({msg:'Exito!!',data:data});
            }
            else{
                res.status(400);
                res.json({msg:'Error!!! no hay productos registrados'});
            }
            
        })
        .catch((err)=>{
            res.status(400);
            res.json({msg:'Error!!!',err:err});
        });
};

const findById = (req,res)=>{
   
    _product.findOne({_id:req.params.id})
        .then((data)=>{
            if(data){
                res.status(200);
                res.json({msg:'Exito!!',data:data});
            }else{
                res.status(400);
                res.json({msg:'Error!!! no se encontro el producto'});
            }
            
        })
        .catch((err)=>{
            res.status(400);
            res.json({msg:'Error!!!',err:err});
        });
};

const update = (req,res)=>{
     const product = req.body;
    _product.findByIdAndUpdate({_id:req.params.id},{$set:product})
        .then((data)=>{
            if(data){
                res.status(200);
                res.json({msg:'Exito!!',data:data});
            }else{
                res.status(400);
                res.json({msg:'Error!!! no se encontro el producto'});
            }
            
        })
        .catch((err)=>{
            res.status(400);
            res.json({msg:'Error!!!',err:err});
        });
};

const deleteProduct = (req,res)=>{
   _product.findByIdAndDelete({_id:req.params.id})
       .then((data)=>{
           if(data){
               res.status(200);
               res.json({msg:'Exito!!',data:data});
           }else{
               res.status(400);
               res.json({msg:'Error!!! no se encontro el producto'});
           }
           
       })
       .catch((err)=>{
           res.status(400);
           res.json({msg:'Error!!!',err:err});
       });
};

module.exports = (User)=>{
    _product = User;
    return ({
        createProduct,
        findAll,
        findById,
        update,
        deleteProduct
    });
}