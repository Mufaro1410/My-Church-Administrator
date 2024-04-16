const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Report = sequelize.define("report", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: DataTypes.DATE,
    },
    content: {
        type: DataTypes.TEXT
    }
})

module.exports = Report