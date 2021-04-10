const {body} = require('express-validator');
const path = require('path');
const validations = [
    body('first_name').notEmpty().withMessage('Tienes que colocar tu nombre'),
    body('last_name').notEmpty().withMessage('Tienes que colocar tu apellido'),
    body('email').notEmpty().withMessage('Tienes que colocar tu email').bail().isEmail().withMessage('Debe ser un email válido'),
    body('password').notEmpty().withMessage('Tienes que colocar una contrañesa'),
    body('tyc').notEmpty().withMessage('Tienes que aceptar los T&C'),
    body('imagen').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png']
      if(!file){
        throw new Error('Tienes que subir una imagen');
      } else {
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
          throw new Error(`Las extensiones de imagen permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
      return true
    })
];

module.exports = validations;
  