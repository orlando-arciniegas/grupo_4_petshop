const express = require('express');
const userController = require("../controllers/userController");

const router = express.Router();

router.route('/')
    .get(userController.index)

router.route('/register')
    .get(userController.register)

router.route('/login')
    .get(userController.login)


module.exports = router


