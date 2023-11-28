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

const getOnearticle = async(req, res ) =>{
try {
    const oneArticle = await articleModel.find();
    res.json(oneArticle);  
} catch (error) {
    res.status(500).json({message : error})
    
}

}

const updateOnearticle= async(req, res) =>{
    try {
        console.log(req.body.id)
        if(req.body.id && req.body.title && req.body.author && req.body.content){
            const newArticle =  await articleModel.findOne({_id :req.body.id});
            if (newArticle){
                newArticle.title = req.body.title;
                newArticle.author = req.body.author
                newArticle.content = req.body.content
                await newArticle.save()
                res.send(newArticle)
            }else{
                res.status(404).json({message : "user not found"});
            }
            
        }

        
    } catch (error) {
        res.status(500).json({error : error.message});
        
    }

}
const deleteOnearticle= (req,res) =>{
    try {
        
    } catch (error) {
        
    }

}
module.exports = {createOnearticle, getAllarticle ,updateOnearticle , deleteOnearticle,getOnearticle};