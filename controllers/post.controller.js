
let _post;
const createPost = (req,res)=>{
    const post = req.body;
    _post.create(post)
        .then((data)=>{
            
            res.status(200);
            res.json({msg:'Publicacion creada correctamente',data:data});
            
        })
        .catch((err)=>{
            res.status(400);
            res.json({msg:'Error!!!',err:err});
        });
};
const findAll = (req,res)=>{
   
    _post.find()
        .then((data)=>{
            if(data.length > 0){

                res.status(200);
                res.json({msg:'Exito!!',data:data});
            }
            else{
                res.status(400);
                res.json({msg:'Error!!! no hay publicaciones'});
            }
            
        })
        .catch((err)=>{
            res.status(400);
            res.json({msg:'Error!!!',err:err});
        });
};

const findById = (req,res)=>{
   
    _post.findOne({_id:req.params.id})
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
    _post.findByIdAndUpdate({_id:req.params.id},{$set:product})
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
   _post.findByIdAndDelete({_id:req.params.id})
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
    _post = User;
    return ({
        createPost,
        findAll
            // ,
            // findById,
            // update,
            // deleteProduct
    });
}