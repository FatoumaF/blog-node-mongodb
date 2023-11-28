const articleModel = require('../models/articles.js');
const multer = require('multer');

// Configuration de Multer pour spécifier où enregistrer les fichiers téléchargés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploadsimg/'); // le dossier où vous souhaitez stocker les fichiers téléchargés
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  },
});

// Middleware pour le téléchargement d'une seule image
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000, // Limite de taille maximale de fichier (10 Mo)
  },
  fileFilter(req, file, cb) {
    console.log('File:', file);
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      console.log("Erreur d'extension de fichier");
      return cb(new Error('Veuillez télécharger un fichier avec une extension jpg ou png.'));
    }
    cb(null, true);
  }
});

const uploadMiddleware = upload.single('image');

const createOnearticle = async (req, res) => {
  try {
    // Utilisez le middleware Multer pour gérer le téléchargement de l'image
    upload.single('image')(req, res, async (err) => {
      if (err) {
        console.error('Erreur lors du téléchargement de l\'image :', err);
        return res.status(500).json({ message: "Erreur lors du téléchargement de l'image" });
      }

      const { title, content, author, name, date } = req.body;

      if (!title || !content || !author || !name) {
        return res.status(400).json({ message: "Les champs title, content, author et name sont requis." });
      }

      const newArticle = new articleModel({
        title,
        content,
        author,
        name,
        date,
      });

      // Si une image est téléchargée, ajoutez le chemin vers l'image à l'article
      if (req.file) {
        newArticle.imagePath = req.file.path;
      }

      // Enregistrez l'article dans la base de données
      const savedArticle = await newArticle.save();
      res.status(200).json(savedArticle);
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'article :', error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const getAllarticle = async (req, res) => {
  try {
    const articles = await articleModel.find();
    res.json(articles);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles :', error);
    res.status(500).json({ message: "Erreur lors de la récupération des articles" });
  }
};


const getOnearticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const oneArticle = await articleModel.findById(articleId);
    res.json(oneArticle);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article :', error);
    res.status(500).json({ message: "Erreur lors de la récupération de l'article" });
  }
};

const updateOnearticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const { title, content, author, date } = req.body;

    const updatedArticle = await articleModel.findByIdAndUpdate(
      articleId,
      {
        title,
        content,
        author,
        date,
      },
      { new: true }
    );

    res.json(updatedArticle);
  } catch (error) {
    console.error('Erreur lors de la modification de l\'article :', error);
    res.status(500).json({ message: "Erreur lors de la modification de l'article" });
  }
};

const deleteOnearticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const deleteArticle = await articleModel.deleteOne({ "_id": articleId });

    if (deleteArticle.deletedCount === 1) {
      res.status(200).json({ message: "Article supprimé avec succès" });
    } else {
      res.status(404).json({ message: "Aucun article trouvé avec cet ID" });
    }
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article :', error);
    res.status(500).json({ message: "Erreur lors de la suppression de l'article" });
  }
};

module.exports = {
  createOnearticle,
  getAllarticle,
  updateOnearticle,
  deleteOnearticle,
  getOnearticle,
  uploadMiddleware: upload.single('image'), // Middleware pour le téléchargement d'une seule image
};
