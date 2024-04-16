const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Organisation = sequelize.define("organisation", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = Organisation