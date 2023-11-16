const article = require('../models/articles.js')
const express = require('express');
const{getAllarticle, getOnearticle, deleteOnearticle,createOnearticle,updateOnearticle}=require('../controllers/articlectrl.js');
;
const router = express.Router();

router.get('/articlesall', getAllarticle);
router.get('/articles:id', getOnearticle);
router.post('/articles', createOnearticle);
router.put('/articles:id',updateOnearticle);
router.delete('/artices:id', deleteOnearticle);

module.exports = router;