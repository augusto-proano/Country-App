const Sequelize = require('sequelize');
const db = require('./_db');
const Countries = require('./countries');
const Cities = require('./cities');

Cities.belongsTo(Countries);
Countries.hasMany(Cities);

module.exports = {
    db,
    Countries,
    Cities
}