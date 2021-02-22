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
router.route('/carrito')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/productos/carrito.ejs')))

router.route('/creacionProducto')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/productos/creacionProducto.ejs')))

    .post((req, res) => res.render(path.resolve(__dirname, '../views/productos/creacionProducto.ejs')))

router.route('/edicionProducto')
    .get((req, res) => res.render(path.resolve(__dirname, '../views/productos/edicionProducto.ejs')))


module.exports = router


