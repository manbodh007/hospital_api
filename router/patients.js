const express = require('express');
const router = express.Router();
const passport = require('passport');
const api = require('../controller/api/patients_api');
const reportApi = require('../controller/api/report_api');

router.post('/register',api.create);
// check the jwt token to create patient report
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),reportApi.createReport);

router.get('/:id/all_reports',reportApi.showReports);


module.exports = router;