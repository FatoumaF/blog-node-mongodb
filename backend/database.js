const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://fatouma53:i6n53Ij6mzU5gf6U@cluster1.ye8fncc.mongodb.net/BlogNodejs',);

    console.log('Connecté à la base de données MongoDB Atlas');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }
};

mongoose.connection.on('error', (err) => {
  console.error('Erreur de connexion à la base de données:', err);
});

module.exports = connectToDatabase;
