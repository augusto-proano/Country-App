const Sequelize = require('sequelize');
const db = require('./_db');

const Cities = db.define('cities', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {notEmpty: true}
    },
    population: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {notEmpty: true}
    }
});

// Cities.addHook('beforeCreate', (city) => {
//     city.name = `${city[0].toUpperCase()} ${city.slice(1)}`;
// })

module.exports = Cities;