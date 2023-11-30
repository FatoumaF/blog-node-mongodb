const port = 3002;
const express = require('express');
const app = express();
const connectToDatabase= require('../backend/database');
// app.use(express.urlencoded({ extended:true}))
connectToDatabase();
const userRoute = require('./routes/user');
const articleRoute = require('../backend/routes/article');
require('../backend/midlewear.js/auth');


app.use(express.json());
app.use(userRoute);
app.use(articleRoute);


app.get('/', (req, res)=>{
    res.status(200)
})
app.listen(port, () => {
    console.log(`Le serveur Express est en cours d'écoute sur le port ${port}`);
  });
