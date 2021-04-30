'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        "firstName": "Giusto",
        "lastName": "Fechnie",
        "email": "gfechnie0@tumblr.com",
        "password": "I5IvbjM"
       },
       {
        "firstName": "Milena",
        "lastName": "Inskipp",
        "email": "minskipp1@cyberchimps.com",
        "password": "hxQTLMLTXj"
       },
       {
        "firstName": "Harbert",
        "lastName": "Lunnon",
        "email": "hlunnon2@etsy.com",
        "password": "FSc4tjFur2"
       },
       {
        "firstName": "Madel",
        "lastName": "Casella",
        "email": "mcasella3@dropbox.com",
        "password": "ZC53r9"
       },
       {
        "firstName": "Jobie",
        "lastName": "Surphliss",
        "email": "jsurphliss4@mozilla.com",
        "password": "hhdZk6gOyg"
       },
       {
        "firstName": "Wilie",
        "lastName": "Druhan",
        "email": "wdruhan5@accuweather.com",
        "password": "mCAKNTrx"
       },
       {
        "firstName": "Miltie",
        "lastName": "Sepey",
        "email": "msepey6@dailymail.co.uk",
        "password": "xO21qo4e"
       },
       {
        "firstName": "Hallie",
        "lastName": "Meier",
        "email": "hmeier7@soup.io",
        "password": "k08vF8KdfKr9"
       },
       {
        "firstName": "Nickolas",
        "lastName": "Shernock",
        "email": "nshernock8@adobe.com",
        "password": "4x6HaX"
       },
       {
        "firstName": "Georgie",
        "lastName": "Subhan",
        "email": "gsubhan9@bigcartel.com",
        "password": "EKhe9xOkxnW2"
       },
       {
        "firstName": "Sybille",
        "lastName": "Eyckelbeck",
        "email": "seyckelbecka@imgur.com",
        "password": "jb5l6Oaek"
       },
       {
        "firstName": "Laurie",
        "lastName": "Hazel",
        "email": "lhazelb@gmpg.org",
        "password": "pU0RNlN"
       },
       {
        "firstName": "Marika",
        "lastName": "Pick",
        "email": "mpickc@amazon.co.uk",
        "password": "G3aKH3d"
       },
       {
        "firstName": "Chelsea",
        "lastName": "Annesley",
        "email": "cannesleyd@si.edu",
        "password": "7IxQiF"
       },
       {
        "firstName": "Vida",
        "lastName": "Fontes",
        "email": "vfontese@state.tx.us",
        "password": "Qxhkid8627"
       },
       {
        "firstName": "Frederic",
        "lastName": "Renvoys",
        "email": "frenvoysf@webmd.com",
        "password": "xz2KGQRqv7"
       },
       {
        "firstName": "Jacqui",
        "lastName": "Sivess",
        "email": "jsivessg@mediafire.com",
        "password": "JvI7nzOxUpTj"
       },
       {
        "firstName": "Carlos",
        "lastName": "Please",
        "email": "cpleaseh@skyrock.com",
        "password": "pH4G0K"
       },
       {
        "firstName": "Easter",
        "lastName": "Bonhome",
        "email": "ebonhomei@sfgate.com",
        "password": "TTUdfR6wfGGg"
       },
       {
        "id": 20,
        "firstName": "Gerri",
        "lastName": "Innocent",
        "email": "ginnocentj@hostgator.com",
        "password": "Z8mbW0",
        "image": "1618083795715-dark-vader.png"
       }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
