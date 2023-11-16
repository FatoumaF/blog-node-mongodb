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

const getOnearticle = (req, res ) =>{
try {
    
} catch (error) {
    
}

}

const updateOnearticle= (req, res) =>{

}
const deleteOnearticle= (req,res) =>{

}
module.exports = {createOnearticle, getAllarticle ,updateOnearticle , deleteOnearticle,getOnearticle};