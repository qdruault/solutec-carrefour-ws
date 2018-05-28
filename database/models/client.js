'use strict'

module.exports = (sequelize, DataTypes) => {
    var Client = sequelize.define('Client', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        lastName: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Client'
    })

    return Client;
}
