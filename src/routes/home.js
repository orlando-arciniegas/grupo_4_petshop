const express = require('express');
const path = require('path');

const router = express.Router();

router.route('/')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/home.ejs')))

router.route('/register')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../views/register.html')))

router.route('/login')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../views/login.html')))

router.route('/detalle')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../views/detalle.html')))

router.route('/carrito')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../views/carrito.html')))


module.exports = router


