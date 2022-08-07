const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')
const Post = require('./Post')

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        users_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 20]
            }
        }
    }, {
    hooks: {

        async beforeCreate(user) {
            const hashed_pass = await bcrypt.hash(user.password, 10);
            user.password = hashed_pass;
        }
    },
});

User.prototype.validatePassword = async function (password, stored_password) {
    return await bcrypt.compare(password, stored_password);
},

{
    sequelize: require('../config/connection'),
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}


User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;