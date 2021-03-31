const { json } = require("express");
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
    },
    create:  (list) =>{
        const file = path.resolve(__dirname,"../usuarios.json")
        const data = JSON.stringify(list, null, ' ')
        fs.writeFileSync(file,data,"utf-8")
    
        return "ok"
    },
};


module.exports = Usuario;