// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(60)
        },
        price: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(6),
            allowNull: false
        },
        discountPercentage: {
            type: dataTypes.TINYINT,
            defaultValue: 0
        },
        sku: {
            type: dataTypes.STRING(45)
        },
        categoryId: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category'
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
        tableName: 'products',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoryId'
        })

        Product.belongsToMany(models.Cart, {
            as:'carts',
            through: 'cartProduct',
            foreignKey: 'productId',
            otherKey: 'cartId',
            timestamps: true
        })
    }

    return Product
};