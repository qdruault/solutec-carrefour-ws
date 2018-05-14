'use strict'

module.exports = (sequelize, DataTypes) => {
    var Country = sequelize.define('Country', {
        id: { type: DataTypes.STRING(3), primaryKey: true},
        name: { type: DataTypes.STRING, allowNull: false },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Country'
    })

    return Country;
}
