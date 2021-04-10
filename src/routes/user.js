const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const uploadFile = require("../middlewares/userMulter");
const validationsRegister = require("../middlewares/validationsRegister");

router.route('/')
    .get(userController.index)

router.route('/register')
    .get(userController.register)
    .post(uploadFile.single('imagen'), validationsRegister, userController.save)

router.route('/login')
    .get(userController.login)
    .post(userController.loginProcess)

module.exports = router;
