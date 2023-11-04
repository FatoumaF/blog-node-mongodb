const express = require('express');
const router = express.Router();
// Pour récupérer les commentaires d'un article spécifique.
router.get('/articles/:id/comments', (req,res )=>{
})
// Pour permettre aux utilisateurs de commenter un article.
router.post('/articles/:id/comments', (req,res)=>{
})

//Pour permettre aux utlisateurs de supprier un commentaire
router.delete('/comments:id', (req,res)=>{

})