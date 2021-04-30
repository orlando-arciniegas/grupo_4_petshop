'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('products', [
      {
        "name": "Alimento Para Perro - Nutrecan Adulto Raza Med/Grande",
        "description": 1,
        "image": "Nutrecan-Adulto-Raza-Mediana-Grande.jpg",
        "price": 6770,
        "stock": 15,
        "discountPercentage": 15,
        "categoryId": 1
      },
      {
        "name": "Antipulgas Advantage gatos hasta 4 kg x0.4 ml para gato",
        "description": 1,
        "image": "Antipulgas-Advantage-gatos.jpg",
        "price": 2500,
        "stock": 15,
        "categoryId": 3
      },
      {
        "name": "Bebedero color azul para mascotas",
        "description": 1,
        "image": "Bebedero-Azul.jpg",
        "price": 3500,
        "stock": 15,
        "categoryId": 4
      },
      {
        "name": "Kinky Collar Negro Camo Verde Huesos",
        "description": 1,
        "image": "Kinky-Collar-Negro-Camo-Verde-Huesos-1.jpg",
        "price": 1650,
        "stock": 15,
        "categoryId": 4
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('products', null, {});
  }
};
