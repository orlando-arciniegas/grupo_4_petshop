const multer = require('multer');
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public/img/productos')
    },
    filename: function (req, file, cb) {
    const newFilename = req.body.nombre + '-' + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
    }
});
const upload = multer({storage});

module.exports = upload;