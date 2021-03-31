const userController = {

    index: (req, res) => {

    },
    register: (req, res) => {
        return res.render("usuarios/register")
    },
    login: (req, res) => {
        return res.render("usuarios/login")
    },
    admin: (req, res) => {
        return res.send('Soy Admin')
    }
}

module.exports = userController;