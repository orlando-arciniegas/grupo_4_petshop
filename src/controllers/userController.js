const userController = {};
const bycrypt = require('bcryptjs');
const dbUsuarios = require('../data/models/Usuario');

userController.index = (req,res) => {

}

userController.register = (req,res) => {
    return res.render("usuarios/register")
}

userController.save = (req,res) => {
    let listUser = dbUsuarios.findAll();
    let newUser = {};
    let id = 1
    let imagen = null;

    if (listUser.length>0) {
        id = listUser[listUser.length-1].id+1;
    }

    if (req.file) {
        imagen = req.file.filename
    }
    newUser = {
        id:id,
        ...req.body,
        imagen:imagen
    }

    newUser.password = bycrypt.hashSync(newUser.password, 10);

    listUser.push(newUser);

    dbUsuarios.create(listUser)

    return res.redirect("/")

}

userController.login = (req,res) => {
    return res.render("usuarios/login")
}

module.exports = userController;