const {Product,User} = require("../../data/models");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

apiController = {

    listProducts: (req, res) => {
        Product.findAll()
            .then(products => {
                
                let response = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: "/api/products"
                    },
                    data: products
                }
                return res.status(200).json(response)
            })
    },
    listUsers: (req, res) => {
        User.findAll({raw: true})
            .then(users => {
                users.forEach(user => {
                    delete user.password 
                    delete user.image
                })
                
                let response = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: "/api/users"
                    },
                    data: users
                }
                return res.status(200).json(response)
            })
    },
    searchUser: (req, res) => {
        
        User.findAll({
                where: {
                    email: {
                        [Op.like]: '%' + req.query.keyword + '%'
                    }
                }
            })
            .then(user => {
     
                if (user.length > 0) {
                    return res.status(200).json(user);
                }
                return res.status(200).json('No existe el usuario');
            })
    },
    deleteUser: (req, res) => {
        let userId = req.params.id;
        User.destroy({
                where: {
                    id: userId
                },
                force: true
            })
            .then(user => {
                res.status(200).json({
                        data: user,
                        status: 200
                    })
                    .catch(error => res.json(error))
            })
    },
    loginUser: (req, res) => {
        const user = {
            id: 1,
            nombre : "Orlando",
            email: "orlando@email.com"
        }
        jwt.sign({user}, 'secretkey', (err, token) => {
            res.json({
                token
            });
        });
    },
    test: (req, res) => {

        jwt.verify(req.token, 'secretkey', (error, authData) => {
            if(error){
                res.sendStatus(403);
            }else{
                res.json({
                        mensaje: "Funcionando.",
                        authData
                });
            }
        });
    }
}

module.exports = apiController;
