const dbUsuarios = require('../data/models/Usuario');      
/*
module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        let usuario = dbUsuarios.find(usuario => usuario.email == req.cookies.email)
        //return res.send(usuario);
        //delete usuario.password;
        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    }else{
        return next();
    }
}*/
module.exports = (req, res, next) => {
	if (!req.session.userLogged) {
		return res.send("No estas logeado");
	}
	next();
}

