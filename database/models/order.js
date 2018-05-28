module.exports = (sequelize, DataTypes) => {
    var Order = sequelize.define('Order', {
        id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        dateReceived: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        dateDelivery: { type: DataTypes.DATE, allowNull: true },
        isDone:       { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Order'
    })

    Order.associate = function(models) {
        // Relation avec la table Client.
        models.Order.belongsTo(models.Client, {
            foreignKey: {
                name: "idClient",
                allowNull: false
            }
        })
        // Relation avec la table Product.
        models.Order.belongsToMany(models.Product, { through: models.OrderProduct, foreignKey: 'idOrder' })
    }

    return Order;
}
