const mainController = {};
const Producto = require("../data/models/Producto");


mainController.index = (req,res) => {
    const all = Producto.findAll();
    const destacado = all.splice(-4);
    return res.render("home", {destacados: destacado,
                    user: req.session.userLogged })
}


mainController.carrito = (req,res) => {
    return res.render("productos/carrito")
}  


module.exports = mainController;