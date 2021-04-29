const bycrypt = require('bcryptjs');
const dbUsuarios = require('../data/models/Usuario');
const {validationResult} = require('express-validator');

const userController = {

    index: (req, res) => {

    },
    register: (req, res) => {
        return res.render("usuarios/register")
    },
    save: (req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render("usuarios/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        const userInDb = dbUsuarios.findByField('email', req.body.email);
        
        if(userInDb){
            return res.render("usuarios/register", {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado.'
                    }
                },
                oldData: req.body
            })
        }
    
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
        delete newUser.repeatPassword
        listUser.push(newUser);

        dbUsuarios.create(listUser)

        let userCreated = newUser
        
        res.redirect('/usuario/login')
    },
    login: (req, res) => {
        return res.render("usuarios/login")
    },
    loginProcess: (req, res) => {
       let userLogin = dbUsuarios.findByField('email', req.body.email);

       if (userLogin) {
           let syncPassword = bycrypt.compareSync(req.body.password, userLogin.password)
            if (syncPassword) {
                delete userLogin.password
                req.session.userLogged = userLogin;

                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                }

                return res.redirect('/')
            }
        return res.render("usuarios/login", {
            errors: {
                password:{
                    msg: 'Las credenciales son invalidas.'
                    }
                }
            });
        }   
        return res.render("usuarios/login", {
           errors: {
               email:{
                   msg: 'Este email no se encuentra registrado.'
               }
           }
       })
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController;