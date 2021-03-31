const bycrypt = require('bcryptjs');
const dbUsuarios = require('../data/models/Usuario');
const userController = {

    index: (req, res) => {

    },

    register: (req, res) => {
        return res.render("usuarios/register")
    },

    save: (req, res) => {
        let listUser = dbUsuarios.findAll();
        let newUser = {};
        let id = 1
        let imagen = null;

        if (listUser.length > 0) {
            id = listUser[listUser.length - 1].id + 1;
        }

        if (req.file) {
            imagen = req.file.filename
        }
        newUser = {
            id: id,
            ...req.body,
            imagen: imagen
        }

        newUser.password = bycrypt.hashSync(newUser.password, 10);

        listUser.push(newUser);

        dbUsuarios.create(listUser)

        return res.redirect("/")

    },

    login: (req, res) => {
        return res.render("usuarios/login")
    },

    admin: (req, res) => {
        return res.send('Soy Admin')
    }
}

module.exports = userController;