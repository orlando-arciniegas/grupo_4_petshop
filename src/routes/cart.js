const express = require('express');
const cartController = require("../controllers/cartController")

const router = express.Router();

router.route('/agregar')
    .post(cartController.addCart)

module.exports = router