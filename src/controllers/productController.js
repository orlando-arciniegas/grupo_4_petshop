const productController = {};
const dbProducto = require("../data/models/Producto.js");

productController.index = (req,res) => {
    const productos = dbProducto.findAll();
    return res.render("productos/listaProductos", {productos})
}

productController.show = (req,res) => {
    const producto = dbProducto.findById(req.params.id)
    return res.render("productos/detalle", {producto})
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