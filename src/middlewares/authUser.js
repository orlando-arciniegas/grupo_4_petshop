const dbUsuarios = require('../data/models/Usuario');      

function authUser(req, res, next){
	if (!req.session.userLogged) {
		return res.redirect('/usuario/login');
	}
	next();
}

module.exports = authUser;