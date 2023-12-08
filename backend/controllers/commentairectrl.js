const commentaireModel = require('../models/commentaire.js');
const articleModel = require('../models/articles.js');

const postOnecom = async (req, res) => {
const articleId = req.params.articleId;
const {  userName, content } = req.body;
try {
   const comment = await commentaireModel.create({
      articleId,
      userName,
      content
   })
   res.json(comment)
   
} catch (error) {
   console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création du commentaire.' });
  }
   
}



 const getOnecom =async (req,res)=>{
   try{
   const commentId = req.params.commentsid;
   console.log(req.params.commentsid);
   const oneComment = await  commentaireModel.findById(commentId);
   res.json(oneComment)
} catch (error) {
   console.error('Erreur lors de la récupération de commentaire :', error);
   res.status(500).json({ message: "Erreur lors de la récupération ducommentaire" });
 }


 }
// const deleteOnecom = (req,res) =>{

// }
module.exports =  postOnecom, getOnecom