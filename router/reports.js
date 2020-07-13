const express = require('express');
const router = express.Router();

const reportApi = require('../controller/api/report_api');

router.get('/:status',reportApi.showStatus);

module.exports = router;