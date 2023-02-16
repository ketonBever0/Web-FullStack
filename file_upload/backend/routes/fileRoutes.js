const express = require('express');
const fileRouter = express.Router();
const c = require('../controllers/fileController');


fileRouter.get('/files/:path', c.fetchFile);
fileRouter.get('/files', c.getFiles);
fileRouter.post('/files', c.uploadFile);
// fileRouter.post('/testfiles', c.testUpload);


module.exports = fileRouter;