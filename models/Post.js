const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'post',
    }
);


module.exports = Post;