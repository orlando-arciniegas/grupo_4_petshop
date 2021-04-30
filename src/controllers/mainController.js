const mainController = {};
// const Producto = require("../dataJson/models/Producto");
const {Product} = require("../data/models");



mainController.index = (req,res) => {
    Product.findAll().then(productos => {
        const destacado = productos.splice(-8);
        return res.render("home", {destacados: destacado,
                        user: req.session.userLogged })
    });
}


mainController.carrito = (req,res) => {
    return res.render("productos/carrito")
}  


module.exports = mainController;