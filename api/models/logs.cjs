const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Logs = sequelize.define("log", {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Logs