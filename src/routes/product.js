const express = require('express');
const path = require('path');
const productController = require("../controllers/productController");
const router = express.Router();
const multer = require('multer');
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

router.route('/')
    .get(productController.index)

router.route('/detalle/:id')
    .get(productController.show)

router.route('/crear')
   .get(productController.create)
   .post(upload.single('imagen'), productController.save)
   
router.route('/editar/:id')
    .get(productController.edit)
    .put(upload.single('imagen'), productController.update);

router.route('/eliminar/:id')
    .get(productController.destroy)
    
module.exports = router;


