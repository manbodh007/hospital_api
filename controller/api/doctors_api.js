const User = require('../../models/doctors');
const passport = require('passport');

const jwt = require('jsonwebtoken');
// new doctor registeration
module.exports.createUser = async function(req,res){
    
   try{
       let user = await User.create(req.body);
       console.log(user);
       if(user){
       return res.json(200,{
           message:'New Registration successfully',
           user:user
       });
    }else{
        return res.json(404,{
            message:'Not found'
        });
    }

   }catch(err){
       return res.json(400,{
           message:'Bad request'
       });
   }
}
// using login generate a jsonwebtoken 
module.exports.Login = async function(req,res){
    try{

        let user = await User.findOne({username:req.body.username});
        if(!user||user.password!= req.body.password){
            return res.json(422,{
                message:'Invalid username or password'
            })
        }

        return res.json(200,{
            message:'login successfully here is your token',
            data:{
                token: jwt.sign(user.toJSON(),'secret',{expiresIn:'100000'})
            }
        })

    }catch(error){
        console.log(error);
        return res.json(400,{
            message:'Bad request'
        });
    }
}