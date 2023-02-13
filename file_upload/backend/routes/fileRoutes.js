const express = require('express');
const fileRouter = express.Router();
const c = require('../controllers/fileController');


fileRouter.get('/files', c.fileController);


module.exports = fileRouter;