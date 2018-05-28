module.exports = (sequelize, DataTypes) => {

    const OrderProduct = sequelize.define('OrderProduct', {
      isAdded: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false}
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'order_product'
    })

    return OrderProduct;
}
