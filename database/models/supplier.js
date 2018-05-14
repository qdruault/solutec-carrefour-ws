'use strict'

module.exports = (sequelize, DataTypes) => {
    var Supplier = sequelize.define('Supplier', {
        id: { type: DataTypes.STRING(5), primaryKey: true},
        name: { type: DataTypes.STRING, allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Supplier'
    })

    return Supplier;
}
