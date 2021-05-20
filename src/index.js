const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override');

// Require for wear sessions & cookies. //
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authUser = require("./middlewares/authUser.js");
const userIsLogged = require("./middlewares/userIsLogged.js");

app.set('puerto', process.env.PORT || 3000);

app.use(express.urlencoded({extended:false}))

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(methodOverride('_method'))

app.listen(app.get('puerto'), ()=> console.log(`servidor corriendo en el puerto ${app.get('puerto')}` ) )

app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, './views'))

app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());
app.use(userIsLogged);

//Middleware de aplicación que se encarga de controlar si el usuario está logueado o no.
//app.use(authUser);

//------------- ROUTES -------------//

app.use('/', require('./routes/home.js'))
app.use('/usuario', require('./routes/user.js'))
app.use('/producto', require('./routes/product.js'))


