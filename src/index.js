const express = require("express");
const path = require("path");

const app = express();

app.set('puerto', process.env.PORT || 3000);

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(app.get('puerto'), ()=> console.log(`servidor corriendo en el puerto ${app.get('puerto')}` ) )

// RUTAS ----------------------------------

app.use('/', require('./routes/home.js'))
