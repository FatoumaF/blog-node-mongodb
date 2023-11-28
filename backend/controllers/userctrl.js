const userModel = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userValidate= require('../validation/validator.js');
const userValidation = require('../validation/validator.js');

const createOne = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const {error} = userValidate(req.body).userValidationRegister; // Modification ici
    if(error) return res.status(401).json(error.details[0].message)

    if (password.length < 5) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins 5 caractères" });
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

    const { error } = userValidation(req.body);
    if (error) return res.status(401).json({ message: error.details[0].message });

    if (!email || !password) {
      return res.status(400).json({ message: "Veuillez fournir des informations correctes" });
    }

    const userExist = await userModel.findOne({ email });

    if (!userExist) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    try {
      const match = await bcrypt.compare(password, userExist.password);

      if (!match) {
        console.error("Password comparison failed");
        return res.status(401).json({ message: "Identifiants invalides" });
      }

      const token = await jwt.sign({ id: userExist._id }, "Secret_KEY", { expiresIn: "12h" });

      return res.status(200).json({
        email: userExist.email,
        id: userExist._id,
        token: token,
        message: "Connexion réussie"
      });
    } catch (bcryptError) {
      console.error("bcrypt error:", bcryptError);
      return res.status(500).json({ message: "Erreur du serveur" });
    }
  } catch (error) {
    console.error("General error:", error);
    return res.status(500).json({ message: "Erreur du serveur" });
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


