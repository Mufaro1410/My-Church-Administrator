const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Membership = sequelize.define("membership", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Membership