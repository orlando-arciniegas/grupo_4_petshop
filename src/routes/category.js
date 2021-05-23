const express = require('express');
const categoryController = require("../controllers/categoryController")

const router = express.Router();

router.route('/listado/:id')
    .get(categoryController.listado)

module.exports = router
