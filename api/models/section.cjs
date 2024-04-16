const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Section = sequelize.define("section", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    location: {
        type: DataTypes.STRING,
    }
})

module.exports = Section