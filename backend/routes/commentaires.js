const express = require('express');
const router = express.Router();
const  postOnecom = require('../controllers/commentairectrl');
const getOnecom = require('../controllers/commentairectrl')

// Pour récupérer les commentaires d'un article spécifique.
router.get('/comments/:commentsid',getOnecom);

// Pour permettre aux utilisateurs de commenter un article.
router.post('/comments/:articleId',postOnecom);

// Pour permettre aux utilisateurs de supprimer un commentaire
// router.delete('/comments/:id', deleteOnecom);

module.exports = router;
            