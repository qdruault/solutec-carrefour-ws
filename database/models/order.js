module.exports = (sequelize, DataTypes) => {
    var Order = sequelize.define('Order', {
        id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        idclient:     { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: false},
        dateReceived: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        dateDelivery: { type: DataTypes.DATE, allowNull: true },
        isDone:       { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Order'
    })

    Order.associate = function(models) {
        // Relation avec la table Product.
        models.Order.belongsToMany(models.Product, {
          through: "order_product",
          timestamps: false,
          freezeTableName: true,
        })
    }

    return Order;
}
