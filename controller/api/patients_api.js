const Patient = require('../../models/patients');
// create patient using mobile number
module.exports.create = async function(req,res){
    try{
        let user = await Patient.findOne({number:req.body.number});
        if(user){
            return res.json(200,{
                message:'Patient is already registered',
                patient:user
            });
        }else{
            let newUser = await Patient.create(req.body);
            if(newUser){
                return res.json(200,{
                    message:'New Patient is registered successfully',
                    patient:newUser
                });
            }
        }
    }catch(err){
        
        return res.json(400,{
            message:'bad request'
        });
    }
    
}