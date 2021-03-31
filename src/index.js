const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override');

app.set('puerto', process.env.PORT || 3000);

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: false}));

app.listen(app.get('puerto'), ()=> console.log(`servidor corriendo en el puerto ${app.get('puerto')}` ) )

app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, './views'))

//------------- ROUTES -------------//

app.use('/', require('./routes/home.js'))
app.use('/usuario', require('./routes/user.js'))
app.use('/producto', require('./routes/product.js'))


