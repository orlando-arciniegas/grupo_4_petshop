const fs = require("fs");
const path = require("path");

const Usuario = {
    findAll:  () =>{
        const file = path.resolve(__dirname,"../usuarios.json")
        const data = fs.readFileSync(file,"utf-8")
    
        return JSON.parse(data)
    },
    findById: (id) =>{
        const userId = Usuario.findAll().find( (user) => user.id == id)
    
        return userId
    }
};


module.exports = Usuario;