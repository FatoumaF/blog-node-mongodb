const multer = require('multer');

const uploadImage = multer({
    storage: fileStorage,
    limits: {
        fileSize: 10000000, // Limite de taille maximale de fichier (10 Mo)
    },
    fileFilter(req, file, cb) {
        console.log(file);
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            console.log("uploadimage");
            return cb(new Error('Veuillez télécharger un fichier avec une extension jpg ou png.'));
        }
        cb(null, true);
    }
});

module.exports = uploadImage