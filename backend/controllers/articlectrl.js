const article = require('../models/articles.js');
const articleModel = require('../models/articles.js');


const createOnearticle = async(req, res) =>{
    try {
        const {title, content, author, date}= req.body
      const newArticle = new articleModel({
        title,
        content,
        author,
        date,
      })
      const saveArticle = await newArticle.save()

      res.status(200).json(saveArticle)
    } catch (error) {
        console.error('Erreur lors de la création de l\'article :', error);
        res.status(200).json({message : "aucun article n'a été posté"})   
    }
}

const getAllarticle = async(req,res) =>{
    try {
        const article = await articleModel.find()
        res.json(article)
    } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
        res.status(500).json({ message: "Erreur lors de la récupération des articles" });
        
    }

}

const getOnearticle = async (req, res ) =>{
try {
    const articleId = req.params.id
    const oneArticle = await articleModel.findById(articleId)
    res.json(oneArticle)
    
} catch (error) {
    console.error('Erreur lors de la récupération des articles :', error);
res.status(500).json({ message : "Erreur"})
    
}

}

const updateOnearticle= async(req, res) =>{

    try {
        const articleId= req.params.id
    const {title, content, author, date}= req.body
      const newArticle = ({
        title,
        content,
        author,
        date,
      })
    const  updateOnearticle = await article.updateOne({"_id":articleId}, newArticle)
    res.json(newArticle)
 
    } catch (error) {
        console.error('Erreur lors de la modification des articles :', error);
res.status(500).json({ message : "Erreur"})

        
    }
    
}
const deleteOnearticle = async (req, res) => {
    try {
      const articleId = req.params.id;
      const deleteArticle = await article.deleteOne({ "_id": articleId });
  
      if (deleteArticle.deletedCount === 1) {
        // L'article a été supprimé avec succès
        res.status(200).json({ message: "Article supprimé avec succès" });
      } else {
        // Aucun article n'a été trouvé avec cet ID
        res.status(404).json({ message: "Aucun article trouvé avec cet ID" });
      }
    } catch (error) {
      console.error('Erreur lors de la suppression des articles :', error);
      res.status(500).json({ message: "Erreur lors de la suppression de l'article" });
    }
  };
  
  
module.exports = {createOnearticle, getAllarticle ,updateOnearticle , deleteOnearticle,getOnearticle};