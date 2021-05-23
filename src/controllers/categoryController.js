const categoryController = {};
// const Producto = require("../dataJson/models/Producto");
const { Category } = require("../data/models");
const { Op } = require("sequelize");

categoryController.listado = (req, res) => {

    Category.findByPk(req.params.id, {include: "products"}).then(categoria => {
        return res.render("categorias/listado", {categoria})
    });
}

module.exports = categoryController;