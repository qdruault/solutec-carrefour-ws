'use strict'

module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {
        barcode: { type: DataTypes.STRING(13), primaryKey: true},
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        stock: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Product'
    })

    return Product;
}
