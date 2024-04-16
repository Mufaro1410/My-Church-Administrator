const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const MaritalStatus = sequelize.define("maritalStatus", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = MaritalStatus