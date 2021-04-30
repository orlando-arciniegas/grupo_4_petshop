'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category', [
      {
        name: "Alimentos",
        description: "Enceuntra todo lo relacionado con alimentos para perros, gatos, roedores y aves"
      },
      {
        name: "Juguetes",
        description: "Enceuntra todo lo relacionado con juguetes para perros, gatos, roedores"
      },
      {
        name: "Medicamentos",
        description: "Enceuntra todo lo relacionado con medicamentos para perros, gatos, roedores y aves"
      },
      {
        name: "Accesorios",
        description: "Enceuntra todo lo relacionado con accesorios para perros, gatos, roedores y aves"
      },
      {
        name: "Snacks",
        description: "Enceuntra todo lo relacionado con snacks para perros, gatos, roedores y aves"
      },
      {
        name: "Belleza e higiene",
        description: "Enceuntra todo lo relacionado con belleza e higiene para perros, gatos, roedores y aves"
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('category', null, {});

  }
};
