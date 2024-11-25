const Sequelize = require('sequelize');
const connection = require('../../configs/database.js');

const Answer = connection.define('answers', {
    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Answer.sync({force: false});
module.exports = Answer;