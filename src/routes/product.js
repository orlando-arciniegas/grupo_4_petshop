const express = require('express');
const productController = require("../controllers/productController");

const router = express.Router();

router.route('/')
    .get(productController.index)

router.route('/detalle/:id')
    .get(productController.show)

router.route('/crear')
    .get(productController.create)
    .post(productController.save)

router.route('/editar/:id')
    .get(productController.edit)


module.exports = router


