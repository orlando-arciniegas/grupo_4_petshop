const userController = {};

userController.index = (req,res) => {

}

userController.register = (req,res) => {
    return res.render("usuarios/register")
}

userController.login = (req,res) => {
    return res.render("usuarios/login")
}

module.exports = userController;