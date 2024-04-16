const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const District = sequelize.define("district", {
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

module.exports = District