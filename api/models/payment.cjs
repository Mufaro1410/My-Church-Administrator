const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

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

module.exports = Payment