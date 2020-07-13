const express = require('express');
const router = express.Router();
const api = require('../controller/api/doctors_api');


router.post('/register',api.createUser);
router.post('/login',api.Login);

module.exports = router;