const express = require('express');
const path = require('path');

const router = express.Router();

router.route('/')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/home.ejs')))

router.route('/register')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/usuarios/register.ejs')))

router.route('/login')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/usuarios/login.ejs')))

router.route('/detalle')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/productos/detalle.ejs')))

    .get((req, res) => res.render(path.resolve(__dirname, '../views/productos/carrito.ejs')))


module.exports = router


