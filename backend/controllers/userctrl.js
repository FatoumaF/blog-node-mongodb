const userModel = require('../models/user.js');

// création d'un utilisateur dans la base de données
const createOne = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Vérifiez la longueur du mot de passe
    if (password.length < 8) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins 8 caractères" });
    }

    // Créer un nouvel utilisateur en utilisant le modèle Mongoose
    const newUser = new userModel({
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

// connexion d'un utilisateur dans la base de données
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "Please enter the correct informations" });
    }

    const userExist = await userModel.findOne({ email: req.body.email });

    if (!userExist) {
      return res.json({ message: "Enter valid credentials" });
    }

    // Votre logique de connexion ici

    return res.json({ message: "good connection" });

  } catch (error) {
    res.status(500).json({ error: error, message: "message" });
  }
};

const updateOne = async (req, res) => {
  try {
    if (req.body.id && req.body.firstName && req.body.lastName && req.body.email && req.body.password) {
      const user = await userModel.findOne({ _id: req.body.id });
      if (user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;
        await user.save();
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } else {
      res.status(400).json({ message: "Missing parameters" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll =async (req, res) => {
  // Implémentez la logique pour obtenir tous les utilisateurs ici
  try {
    if(req.body.id){
        await userModel.findByIdAndUpdate({})
    }
  } catch (error) {
    
  }
};

module.exports = { getAll, createOne, login, updateOne };

