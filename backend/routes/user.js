const express = require('express');
const {createOne, getAll, login,updateOne} =require ('../backend/controllers/userctrl.')

const router = express.Router();


//Pour récupérer les détails d'un utlisateurs connecté
router.get('user:id',)
// Pour mettre à jour les informations d'un utlisateurs connectéé
router.put('/user:id',)

//Pour que l'utlisateur se connecte
 router.post('/login',)
 //Pour que l'utilisateur se connecte
 router.post('/register', )

export default router