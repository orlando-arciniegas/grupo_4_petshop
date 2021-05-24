// const dbUsuarios = require('../dataJson/models/Usuario');
const { User } = require("../data/models");

async function userIsLogged(req, res, next){
    
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    // let userFromCookie = dbUsuarios.findByField('email', emailInCookie);
    let userFromCookie = await User.findOne({
        where: {email: emailInCookie || "" }
    })
   
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
        delete userFromCookie.password
    }
    
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userIsLogged;