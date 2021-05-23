const mainController = {};
// const Producto = require("../dataJson/models/Producto");
const { Product } = require("../data/models");
const { Op } = require("sequelize");



mainController.index = (req, res) => {
    if (req.query.buscar) {
        Product.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: '%' + req.query.buscar + '%'
                        }
                    },
                    {
                        description: {
                            [Op.like]: '%' + req.query.buscar + '%'
                        }
                    }
                ]

            }
        }).then(productos => {
            return res.render("home", { destacados: productos, user: req.session.userLogged, busqueda: true })
        })
    } else {
        Product.findAll().then(productos => {
            const destacado = productos.splice(-8);
            return res.render("home", { destacados: destacado, user: req.session.userLogged, busqueda: false })
        });
    }
}


mainController.carrito = (req, res) => {
    return res.render("productos/carrito")
}


module.exports = mainController;