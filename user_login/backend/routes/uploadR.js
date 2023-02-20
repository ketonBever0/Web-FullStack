const express = require('express');
const r = express.Router();
const { getFiles, fileUpload } = require('../contr/uploadC');
const protect = require('../middlewares/auth_middleware');


r.get('/get', protect, getFiles);
r.post('/upload', protect, fileUpload);



module.exports = r;