const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Member = require('./members.cjs')
const Circuit = require('./circuit.cjs')

const Payment = sequelize.define("payment", {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    paymentFor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})

Member.hasMany(Payment)
Payment.belongsTo(Member)

Circuit.hasMany(Payment)
Payment.belongsTo(Circuit)

module.exports = Payment