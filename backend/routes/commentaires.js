const express = require('express');
const router = express.Router();
const {postOnecom,getOnecom, deleteOnecom}= require('../controllers/commentairectrl');

// Pour récupérer les commentaires d'un article spécifique.
router.get('/articles/:id/comments', getOnecom)
// Pour permettre aux utilisateurs de commenter un article.
router.post('/articles/:id/comments', postOnecom);

//Pour permettre aux utlisateurs de supprier un commentaire
router.delete('/comments:id', deleteOnecom);

module.exports = router ;