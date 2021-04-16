const dbUsuarios = require('../data/models/Usuario');

function userIsLogged(req, res, next){
    
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = dbUsuarios.findByField('email', emailInCookie);
   
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