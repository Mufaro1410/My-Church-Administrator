const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const District = require('./district.cjs')

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

District.hasMany(Circuit)
Circuit.belongsTo(District)

module.exports = Circuit