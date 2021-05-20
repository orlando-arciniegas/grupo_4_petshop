// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(60),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(60),
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'users',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'userId'
        })

        User.belongsToMany(models.Rol, {
            as:'roles',
            through: 'userRole',
            foreignKey: 'usersId',
            otherKey: 'rolesId',
            timestamps: true
        })
    }
    return User
};