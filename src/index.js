const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override');
const dotenv = require('dotenv');

const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('mysql://j7rl561cgwhj6jce:h9geofoynjg3ezxw@tvcpw8tpu4jvgnnq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/b4n2fdg4bwp62f2j') 
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
dotenv.config();

// Require to wear sessions & cookies. //
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authUser = require("./middlewares/authUser.js");
const userIsLogged = require("./middlewares/userIsLogged.js");

app.set('puerto', process.env.PORT || 3001);

app.use(express.urlencoded({extended:false}))

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(methodOverride('_method'))

app.listen(app.get('puerto'), ()=> console.log(`Server on port: ${app.get('puerto')}` ) )

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
app.use('/api', require('./api/routes/apiRoutes.js'))
app.use('/categoria', require('./routes/category.js'))
app.use('/carrito', require('./routes/cart.js'))




