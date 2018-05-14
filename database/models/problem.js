'use strict'

module.exports = (sequelize, DataTypes) => {
    var Problem = sequelize.define('Problem', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW},
        type: { type: DataTypes.ENUM('broken', 'technical' , 'other'), allowNull: false },
        description: { type: DataTypes.STRING, allowNull: true },
        photo: { type: DataTypes.STRING, allowNull: true },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Problem'
    })

    Problem.associate = function(models) {
        // Relation avec la table Coworker.
        models.Problem.belongsTo(models.Coworker, {
            foreignKey: {
                name: "idCoworker",
                // 1 problème a forcément été rapporté par un coworker.
                allowNull: false
            }
        })

        // Relation avec la table Product.
        models.Problem.belongsTo(models.Product, {
            foreignKey: {
                name: "barcodeProduct",
                // 1 problème ne concerne pas forcément un produit.
                allowNull: true
            }
        })

    }

    return Problem;
}
