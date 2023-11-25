const article = require('../models/articles.js')
const express = require('express');
const{getAllarticle, getOnearticle, deleteOnearticle,createOnearticle,updateOnearticle}=require('../controllers/articlectrl.js');
const multer = require('multer');
const router = express.Router();

router.get('/articlesall', getAllarticle);
router.get('/articles/:id', getOnearticle);
router.post('/articles/', createOnearticle);
router.put('/articles/:id',updateOnearticle);
router.delete('/articles/:id', deleteOnearticle);

module.exports = router;