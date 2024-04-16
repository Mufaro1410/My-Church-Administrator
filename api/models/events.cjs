const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Event = sequelize.define("event", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    venue: {
        type: DataTypes.STRING,
    },
    organiser: {
        type: DataTypes.STRING,
    },
    theme: {
        type: DataTypes.STRING,
    },
    duration: {
        type: DataTypes.NUMBER
    }
})

module.exports = Event