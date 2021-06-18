/*----------------------------------------
            Modules
----------------------------------------*/
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const userIsLogged = require("./middlewares/userIsLogged.js");
const mysql = require("mysql");

/*----------------------------------------
            Settings
----------------------------------------*/
const app = express();
dotenv.config();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(methodOverride("_method"));
app.use(session({
    secret: "topSecret",
    resave: true,
    saveUninitialized: true,
}));
app.use(cookieParser());

/*----------------------------------------
            Database
----------------------------------------*/
const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  "host": "127.0.0.1",
  "user": "root",
  "password": null,
  "database": "petshop"
});
connection.connect();
connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) throw err;
  console.log("DB is connected, the solution is: ", rows[0].solution);
});

/*----------------------------------------
            Middlewares
----------------------------------------*/
app.use(userIsLogged);

/*----------------------------------------
            Routes
----------------------------------------*/
app.use("/", require("./routes/home.js"));
app.use("/usuario", require("./routes/user.js"));
app.use("/producto", require("./routes/product.js"));
app.use("/api", require("./api/routes/apiRoutes.js"));
app.use("/categoria", require("./routes/category.js"));
app.use("/carrito", require("./routes/cart.js"));

/*----------------------------------------
            Listen to port
----------------------------------------*/
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => console.log(`Server on port: ${app.get("port")}`));