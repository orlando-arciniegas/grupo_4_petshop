const dbProducto = require("../data/models/Producto.js");
const multer = require('multer');
const fs = require('fs');
const path = require('path')

const productController = {
    index: (req,res) => {
    const productos = dbProducto.findAll();
    return res.render("productos/listaProductos", {productos})
}, 
    show: (req,res) => {
    const producto = dbProducto.findById(req.params.id)
    return res.render("productos/detalle", {producto})
},
    create: (req,res) => {
    return res.render("productos/creacionProducto")
},
    save: (req,res, next) => {
        const productos = dbProducto.findAll();
        let agregarProducto = productos.pop();
        productos.push(agregarProducto);
        console.log();
        let nuevoProducto = {
            id: agregarProducto.id +1,
            nombre : req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            imagen: req.file.filename,
            precio: req.body.precio,
            stock: req.body.stock
        }
        productos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(productos,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'), nuevoProductoGuardar);
        if(!req.file){
                const error = new Error('Por favor seleccione un archivo')
                error.httpStatusCode = 400
                return next(error);
                }
                else {
                    res.redirect('/producto');
        }  
    }, 
    edit: (req,res)=>{
        const productos = dbProducto.findAll();
        const productoId = dbProducto.findById(req.params.id)
        const productoEditar = productos.find(producto => producto == productoId);
        res.render('productos/edicionProducto', {productos});
    }, 
    update: (req,res) =>{
        const productos = dbProducto.findAll();
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let productUpdate = productos.map(producto =>{
            if(producto.id == req.body.id){
                return producto = req.body;
            }
            return producto;
        })
        let productoActualizar = JSON.stringify(productUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'),productoActualizar)
        res.redirect('/producto')
    },
    destroy: (req,res) =>{
        const productos = dbProducto.findAll();
        const productoDestroy = req.params.id;
        const productoFinal = productos.filter(producto => producto.id != productoDestroy);
        let productoSave = JSON.stringify(productoFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'),productoSave);
        res.redirect('/producto')
    }
}   

module.exports = productController;