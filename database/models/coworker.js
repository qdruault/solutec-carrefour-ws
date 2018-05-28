'use strict'

module.exports = (sequelize, DataTypes) => {
    var Coworker = sequelize.define('Coworker', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        lastName: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        isManager: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Coworker'
    })

    return Coworker;
}
