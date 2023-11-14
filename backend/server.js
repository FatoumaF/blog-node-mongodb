const port = 3002;
const express = require('express');
const app = express();
const connectToDatabase= require('../backend/database');

connectToDatabase();

const userRoute = require('./routes/user')

app.use(express.json());
app.use(userRoute)


app.get('/', (req, res)=>{
    res.status(200).json(data)
})
app.listen(port, () => {
    console.log(`Le serveur Express est en cours d'écoute sur le port ${port}`);
  });
