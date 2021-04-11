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
        discount_percentage: {
            type: dataTypes.TINYINT,
            defaultValue: 0
        },
        sku: {
            type: dataTypes.STRING(45)
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category'
            }
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })

        Product.belongsToMany(models.Cart, {
            as:'carts',
            through: 'cart_product',
            foreignKey: 'product_id',
            otherKey: 'cart_id',
            timestamps: true
        })
    }

    return Product
};