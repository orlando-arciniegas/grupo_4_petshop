const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiController");
const authToken = require("../middlewares/authToken");

router.get('/products', apiController.listProducts);

router.get('/users', authToken, apiController.listUsers);

router.get('/users/search', apiController.searchUser);

router.post('/users/delete/:id', apiController.deleteUser);

router.route('/users/login', apiController.loginUser)

router.get('/users/test', authToken, apiController.test)
    
module.exports = router;
