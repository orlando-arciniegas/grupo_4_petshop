const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override');
const dotenv = require('dotenv');

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});


dotenv.config();

// Require to wear sessions & cookies. //
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authUser = require("./middlewares/authUser.js");
const userIsLogged = require("./middlewares/userIsLogged.js");

app.set('puerto', process.env.PORT || 3001);

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(methodOverride('_method'))

app.listen(app.get('puerto'), () => console.log(`Server on port: ${app.get('puerto')}`))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'))

app.use(session({
    secret: 'topSecret',
    resave: true,
    saveUninitialized: true,
}))

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());
app.use(userIsLogged);

//------------- ROUTES -------------//

app.use('/', require('./routes/home.js'));
app.use('/usuario', require('./routes/user.js'));
app.use('/producto', require('./routes/product.js'));
app.use('/api', require('./api/routes/apiRoutes.js')) 
app.use('/categoria', require('./routes/category.js')) 
app.use('/carrito', require('./routes/cart.js'))