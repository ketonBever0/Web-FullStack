const express = require('express');
const r = express.Router();
const { getFiles, fileUpload, deleteFile } = require('../contr/uploadC');
const protect = require('../middlewares/auth_middleware');


r.post('/upload', protect, fileUpload);
r.get('/get', protect, getFiles);
r.delete('/delete', protect, deleteFile);



module.exports = r;