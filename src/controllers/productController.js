const productController = {};
const dbProducto = require("../data/models/Producto.js");

productController.index = (req,res) => {
    return console.log("index");
}

productController.show = (req,res) => {
    producto = dbProducto.findById(req.params.id)
    return res.render("productos/detalle", {producto: producto })
}

productController.create = (req,res) => {
    return res.render("productos/creacionProducto")
}

productController.save = (req,res) => {
    console.log("guardar")
    res.redirect("/")
}

productController.edit = (req,res) => {
    return res.render("productos/edicionProducto")
} 

module.exports = productController;