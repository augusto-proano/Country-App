const Sequelize = require('sequelize');
const db = require('./_db');

const Countries = db.define('countries', {
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


module.exports = Countries;