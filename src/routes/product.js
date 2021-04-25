const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const authUser = require('../middlewares/authUser')
const uploadFile = require('../middlewares/productMulter.js')

router.route('/')
    .get(authUser, productController.index)

router.route('/detalle/:id')
    .get(productController.show)

router.route('/crear')
   .get(authUser, productController.create)
   .post(uploadFile.single('imagen'), productController.save)
   
router.route('/editar/:id')
    .get(authUser, productController.edit)
    .put(uploadFile.single('imagen'), productController.update);

router.route('/eliminar/:id')
    .get(authUser, productController.destroy)
    
module.exports = router;


