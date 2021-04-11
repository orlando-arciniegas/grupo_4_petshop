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
        first_name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        last_name: {
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
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'user_id'
        })

        User.belongsToMany(models.Cart, {
            as:'roles',
            through: 'user_role',
            foreignKey: 'users_id',
            otherKey: 'roles_id',
            timestamps: true
        })
    }
    return User
};