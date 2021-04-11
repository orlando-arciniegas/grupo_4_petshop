'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        "first_name": "Giusto",
        "last_name": "Fechnie",
        "email": "gfechnie0@tumblr.com",
        "password": "I5IvbjM"
       },
       {
        "first_name": "Milena",
        "last_name": "Inskipp",
        "email": "minskipp1@cyberchimps.com",
        "password": "hxQTLMLTXj"
       },
       {
        "first_name": "Harbert",
        "last_name": "Lunnon",
        "email": "hlunnon2@etsy.com",
        "password": "FSc4tjFur2"
       },
       {
        "first_name": "Madel",
        "last_name": "Casella",
        "email": "mcasella3@dropbox.com",
        "password": "ZC53r9"
       },
       {
        "first_name": "Jobie",
        "last_name": "Surphliss",
        "email": "jsurphliss4@mozilla.com",
        "password": "hhdZk6gOyg"
       },
       {
        "first_name": "Wilie",
        "last_name": "Druhan",
        "email": "wdruhan5@accuweather.com",
        "password": "mCAKNTrx"
       },
       {
        "first_name": "Miltie",
        "last_name": "Sepey",
        "email": "msepey6@dailymail.co.uk",
        "password": "xO21qo4e"
       },
       {
        "first_name": "Hallie",
        "last_name": "Meier",
        "email": "hmeier7@soup.io",
        "password": "k08vF8KdfKr9"
       },
       {
        "first_name": "Nickolas",
        "last_name": "Shernock",
        "email": "nshernock8@adobe.com",
        "password": "4x6HaX"
       },
       {
        "first_name": "Georgie",
        "last_name": "Subhan",
        "email": "gsubhan9@bigcartel.com",
        "password": "EKhe9xOkxnW2"
       },
       {
        "first_name": "Sybille",
        "last_name": "Eyckelbeck",
        "email": "seyckelbecka@imgur.com",
        "password": "jb5l6Oaek"
       },
       {
        "first_name": "Laurie",
        "last_name": "Hazel",
        "email": "lhazelb@gmpg.org",
        "password": "pU0RNlN"
       },
       {
        "first_name": "Marika",
        "last_name": "Pick",
        "email": "mpickc@amazon.co.uk",
        "password": "G3aKH3d"
       },
       {
        "first_name": "Chelsea",
        "last_name": "Annesley",
        "email": "cannesleyd@si.edu",
        "password": "7IxQiF"
       },
       {
        "first_name": "Vida",
        "last_name": "Fontes",
        "email": "vfontese@state.tx.us",
        "password": "Qxhkid8627"
       },
       {
        "first_name": "Frederic",
        "last_name": "Renvoys",
        "email": "frenvoysf@webmd.com",
        "password": "xz2KGQRqv7"
       },
       {
        "first_name": "Jacqui",
        "last_name": "Sivess",
        "email": "jsivessg@mediafire.com",
        "password": "JvI7nzOxUpTj"
       },
       {
        "first_name": "Carlos",
        "last_name": "Please",
        "email": "cpleaseh@skyrock.com",
        "password": "pH4G0K"
       },
       {
        "first_name": "Easter",
        "last_name": "Bonhome",
        "email": "ebonhomei@sfgate.com",
        "password": "TTUdfR6wfGGg"
       },
       {
        "id": 20,
        "first_name": "Gerri",
        "last_name": "Innocent",
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
