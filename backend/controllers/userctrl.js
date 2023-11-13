const userModel = require('../models/user.js');
const mongoose = require('mongoose');


// création d'un utlisateur dans la base de donnée
const createOne = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Vérifiez la longueur du mot de passe
    if (password.length < 8) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins 8 caractères" });
    }

    // Créer un nouvel utilisateur en utilisant le modèle Mongoose
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      // Vous pouvez définir d'autres champs ici selon votre modèle
    });

    // Enregistrez le nouvel utilisateur dans la base de données
    const savedUser = await newUser.save();

    // Répondez avec les détails de l'utilisateur nouvellement créé
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};


//connexion d'un utlisateur dans la base de donnée
const login = async(req, res) => {
    try {
        const {email , password} = req.body
        if (!email || !password){
            return res.json({message : "Please enter the correct informations"})
        }

        const  userExist = await  userModel.findOne({email : req.body.email})

        if(!userExist){
            return res.json({message : "enter valide champs"})
        }
        
    } catch (error) {
        
    }
 
};

const updateOne = (req, res) => {
  // Implémentez la logique de mise à jour ici
};

const getAll = (req, res) => {
  // Implémentez la logique pour obtenir tous les utilisateurs ici
};

module.exports = { getAll, createOne, login, updateOne };

