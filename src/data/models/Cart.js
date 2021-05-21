module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        status: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        totalPrice: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User'
            }
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'carts',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        })

        Cart.belongsToMany(models.Product, {
            as:'products',
            through: 'cartProduct',
            foreignKey: 'cartId',
            otherKey: 'productId',
            timestamps: true
        })
    }

    return Cart
};

