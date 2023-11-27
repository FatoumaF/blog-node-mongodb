const userModel = require('../models/user.js');
const bcrypt = require('bcrypt');
const validate= require('../validation/validator.js')

const createOne = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { error } = validate(req.body); // Modification ici
    if(error) return res.status(401).json(error.details[0].message)

    if (password.length < 8) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins 8 caractères" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Veuillez fournir des informations correctes" });
    }

    const userExist = await userModel.findOne({ email: req.body.email });

    if (!userExist) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    // Votre logique de connexion ici

    return res.status(200).json({ message: "Connexion réussie" });

  } catch (error) {
    res.status(500).json({ error: error, message: "Erreur du serveur" });
  }
};

const updateOne = async (req, res) => {
  try {
    const { id, firstName, lastName, email, password } = req.body;

    if (id && firstName && lastName && email && password) {
      const user = await userModel.findOne({ _id: id });

      if (user) {
        const hashedPassword = await bcrypt.hash(password, 10);

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = hashedPassword;

        await user.save();
        res.json(user);
      } else {
        res.status(404).json({ message: "Utilisateur non trouvé" });
      }
    } else {
      res.status(400).json({ message: "Paramètres manquants" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
};

module.exports = { getAll, createOne, login, updateOne };


