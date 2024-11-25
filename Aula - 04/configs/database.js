const { Sequelize } = require('sequelize');
const connection = new Sequelize({
    dialect: 'sqlite',
    storage: './database/mock_database.sqlite'
});

module.exports = connection;