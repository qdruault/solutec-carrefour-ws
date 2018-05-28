module.exports = (sequelize, DataTypes) => {

    const OrderProduct = sequelize.define('order_product', {
      isAdded: DataTypes.BOOLEAN,
    }, {
      timestamps: false,
      freezeTableName: true,
    })

    return OrderProduct;
}
