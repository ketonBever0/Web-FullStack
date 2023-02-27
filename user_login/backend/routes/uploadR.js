const express = require('express');
const r = express.Router();
const { getFiles, fileUpload } = require('../contr/uploadC');
const protect = require('../middlewares/auth_middleware');


r.post('/upload', protect, fileUpload);
r.get('/get', protect, getFiles);



module.exports = r;