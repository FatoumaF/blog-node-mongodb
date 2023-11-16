const user = require('../models/user.js')
const express = require('express');
const { createOne, getAll, login, updateOne } = require('../controllers/userctrl.js');

// import {createOne, getAll, login,updateOne} from '../backend/controllers/userctrl.'

const router = express.Router();


//Pour récupérer les détails d'un utlisateurs connecté
router.get('/user', getAll)
// Pour mettre à jour les informations d'un utlisateurs connectéé
router.put('/user:id', updateOne)


//Pour que l'utlisateur se connecte
 router.post('/login', login)
 //Pour que l'utilisateur se connecte
 router.post('/register',createOne )

 module.exports = router;
