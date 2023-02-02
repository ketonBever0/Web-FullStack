const express = require('express');
const r = express.Router();

const c = require('../contr/imageGenerateC');


r.post('/generateimage', c.generateImage);



module.exports=r;