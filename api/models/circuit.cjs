const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Circuit = sequelize.define("circuit", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING
    }
})

module.exports = Circuit