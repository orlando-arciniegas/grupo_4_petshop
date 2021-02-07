const express = require('express');
const path = require('path');

const router = express.Router();

router.route('/')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../views/home.html')))

router.route('/register')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../views/register.html')))

router.route('/login')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../views/login.html')))


module.exports = router


