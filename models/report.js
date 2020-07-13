
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        require:true,
    },
    createdBy:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:['Nagetive','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit']
    },
    date:{
        type:Date,
        required:true,
    }
});


const reportCard = mongoose.model('report',reportSchema);

module.exports = reportCard;