const express = require('express');
const path = require('path');
const mainController = require("../controllers/mainController")

const router = express.Router();

router.route('/')
    .get(mainController.index)

 router.route('/carrito')
    .get(mainController.carrito)

module.exports = router





