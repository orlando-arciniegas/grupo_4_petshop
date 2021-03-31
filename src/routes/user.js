const express = require('express');
const multer = require('multer');
const path = require('path');
const userController = require("../controllers/userController");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/usuarios')
    },
    filename: function (req, file, cb) {
        let fileName = Date.now() + '-' + file.originalname.replace(/ /gi, '-').toLowerCase();
      cb(null, fileName)
    }
  })
   
let upload = multer({ storage: storage })

const router = express.Router();

router.route('/')
    .get(userController.index)

router.route('/register')
    .get(userController.register)
    .post(upload.single('imagen'), userController.save)

router.route('/login')
    .get(userController.login)


module.exports = router


