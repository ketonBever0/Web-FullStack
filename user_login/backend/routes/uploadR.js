const express = require('express');
const r = express.Router();
const { fileUpload } = require('../contr/uploadC');
const protect = require('../middlewares/auth_middleware');


r.post('/upload', protect, fileUpload);



module.exports = r;