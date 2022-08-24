const { Sequelize } = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
    'tech_blog_steven',
    'root',
    'pass',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);


module.exports = connection