const dbProducto = require("../dataJson/models/Producto.js");
const multer = require('multer');
const fs = require('fs');
const path = require('path')

//Requerir modelo de la base de datos
const dataBase = require("../data/models");
//const sequelize = db.sequelize;
//const Op = db.Sequelize.Op;

const productController = {
    index: (req,res) => {
    dataBase.Product.findAll({ include: 'category' }).then( productos => {
        return res.render("productos/listaProductos", {productos})
    })
    
}, 
    show: (req,res) => {
    dataBase.Product.findByPk(req.params.id).then(producto => {
        return res.render("productos/detalle", {producto})
    })
},
    create: (req,res) => {
    dataBase.Category.findAll().then(categorias => {
        return res.render("productos/creacionProducto", {categorias})
    })
},
    save: (req,res, next) => {
        // const productos = dbProducto.findAll();
        // let agregarProducto = productos.pop();
        // productos.push(agregarProducto);
        // console.log();
        // let nuevoProducto = {
        //     id: agregarProducto.id +1,
        //     nombre : req.body.nombre,
        //     descripcion: req.body.descripcion,
        //     categoria: req.body.categoria,
        //     imagen: req.file.filename,
        //     precio: req.body.precio,
        //     stock: req.body.stock
        // }
        // productos.push(nuevoProducto);
        // let nuevoProductoGuardar = JSON.stringify(productos,null,2);
        // fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'), nuevoProductoGuardar);
        // if(!req.file){
        //         const error = new Error('Por favor seleccione un archivo')
        //         error.httpStatusCode = 400
        //         return next(error);
        //         }
        //         else {
        //             res.redirect('/producto');
        // }
        let filename = null;
        if(req.file) {
            filename = req.file.filename
        }
        const data ={
            name : req.body.nombre,
            description: req.body.descripcion,
            categoryId: req.body.categoria,
            image: filename,
            price: req.body.precio,
            stock: req.body.stock
        }

        dataBase.Product.create(data).then(()=> {
            return res.redirect('/producto')
        }).catch((err) => {
            dataBase.Category.findAll().then(categorias => {
                return res.render("productos/creacionProducto", {old:data, categorias})
            })
        })
    }, 
    edit: (req,res)=>{
        // const productos = dbProducto.findAll();
        // const productoId = dbProducto.findById(req.params.id)
        // const productoEditar = productos.find(producto => producto == productoId);
        const categorias = dataBase.Category.findAll();
        const producto = dataBase.Product.findByPk(req.params.id, {include: "category"})
        Promise.all([producto, categorias]).then( ([producto, categorias]) => {
            res.render('productos/edicionProducto', {producto, categorias});
        })
    }, 
    update: (req,res) =>{
        // const productos = dbProducto.findAll();
        // req.body.id = req.params.id;
        // req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        // let productUpdate = productos.map(producto =>{
        //     if(producto.id == req.body.id){
        //         return producto = req.body;
        //     }
        //     return producto;
        // })
        // let productoActualizar = JSON.stringify(productUpdate,null,2);
        // fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'),productoActualizar)
        let data = {
            name : req.body.nombre,
            description: req.body.descripcion,
            categoryId: req.body.categoria,
            price: req.body.precio,
            stock: req.body.stock,
            discountPercentage: req.body.descuento
        }
        if(req.file) {
            data.image = req.file.filename
        }
        dataBase.Product.update(data, {where: {id: req.params.id}}).then(()=> {
            res.redirect('/producto')
        }).catch((err)=> {
            res.redirect(`/producto/editar/${req.params.id}`)
        })
    },
    destroy: (req,res) =>{
        // const productos = dbProducto.findAll();
        // const productoDestroy = req.params.id;
        // const productoFinal = productos.filter(producto => producto.id != productoDestroy);
        // let productoSave = JSON.stringify(productoFinal,null,2)
        // fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'),productoSave);
        // res.redirect('/producto')
        dataBase.Product.destroy({where: {id:req.params.id}}).then(()=> {
            res.redirect('/producto')
        })
    },
  /*  list: (req, res) => {
        dataBase.Product.findAll()
        const productos = dbProducto.findAll();
        return res.render("productos/listaProductos", {productos})
    }*/
}   

module.exports = productController;