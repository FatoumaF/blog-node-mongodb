const express = require('express');
const { createOne, getAll, login, updateOne } = require('../controllers/userctrl.js');

// import {createOne, getAll, login,updateOne} from '../backend/controllers/userctrl.'

const router = express.Router();


//Pour récupérer les détails d'un utlisateurs connecté
router.get('user:id', getAll)
// Pour mettre à jour les informations d'un utlisateurs connectéé
router.put('/user:id', updateOne)

//Pour que l'utlisateur se connecte
 router.post('/login', login)
 //Pour que l'utilisateur se connecte
 router.post('/register',createOne )

 module.exports = router;
