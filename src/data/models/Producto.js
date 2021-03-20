const fs = require("fs");
const path = require("path");

const Producto = {
    findAll:  () =>{
        const file = path.resolve(__dirname,"../productos.json")
        const data = fs.readFileSync(file,"utf-8")
    
        return JSON.parse(data)
    },
    findById: (id) =>{
        const productId = Producto.findAll().find( (product) => product.id == id)
    
        return productId
    }
};


module.exports = Producto;