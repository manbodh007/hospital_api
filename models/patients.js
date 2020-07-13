const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    number:{
        type:Number,
        require:true
    }
},{
    timestamps:true
});

const user = mongoose.model('Patient',patientSchema);
module.exports = user;