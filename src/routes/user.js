const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const uploadFile = require("../middlewares/userMulter");
const validationsRegister = require("../middlewares/validationsRegister");
const guestMiddlewares = require("../middlewares/guestMiddlewares")

router.route('/')
    .get(userController.index)

router.route('/register')
    .get(guestMiddlewares, userController.register)
    .post(uploadFile.single('imagen'), validationsRegister, userController.store)

router.route('/login')
    .get(guestMiddlewares, userController.login)
    .post(userController.loginProcess)

router.route('/logout')
    .get(userController.logout)

module.exports = router;
