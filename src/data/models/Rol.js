module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        slug: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING
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
        updatedAt: 'updatedt',
    }
    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = models => {

        Rol.belongsToMany(models.User, {
            as:'users',
            through: 'userRole',
            foreignKey: 'rolesId',
            otherKey: 'usersId',
            timestamps: true
        })
    }
    return Rol
};