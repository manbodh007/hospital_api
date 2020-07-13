const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});



const User = mongoose.model('Doctor',DoctorSchema);
module.exports = User;