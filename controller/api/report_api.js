const Report = require('../../models/report');
const { report } = require('process');

module.exports.createReport = async function(req,res){
    try{
        let report = await Report.create({
            patient:req.params.id,
            createdBy:req.body.createdBy,
            status:req.body.status,
            date:new Date()
        });
    
        if(report){
            return res.json(200,{
                message:'new report created',
                report:report
            })
        }else{
            return res.json(400,{
                message:'report not created',
            });
        }
    }catch(error){
        return res.json(400,{
            message:error
        });
    }
}
// fetching all report of given id of patient
module.exports.showReports = async function(req,res){
    try{

        let reports = await Report.find({patient:req.params.id});
        // reports = await reports.populate('patient').execpopulate();
        if(reports){
            return res.json(200,{
                message:'all reports are here',
                reports:reports
            })
        }

    }catch(error){
        return res.json(400,{
            message:"bad request"
        });
    }
}
// showing the reports using given status
module.exports.showStatus = async function(req,res){
    try{
        let reports = await Report.find({status:req.params.status});
        if(reports){
            return res.json(200,{
                message:'all the reports of '+ req.params.status + ' status',
                reports:reports
            });
        }

    }catch(error){
        return res.json(400,{
            message:"bad request"
        });
    }
}