const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Conference = sequelize.define("conference", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING,
    },
    contact: {
        type: DataTypes.STRING
    }
})

module.exports = Conference