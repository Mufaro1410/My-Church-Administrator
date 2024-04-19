const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Organisation = require('./organisation.cjs')
const Circuit = require('./circuit.cjs')
const Member = require('./members.cjs')

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

Organisation.hasMany(Report)
Report.belongsTo(Organisation)

Circuit.hasMany(Report)
Report.belongsTo(Circuit)

Member.hasMany(Report)
Report.belongsTo(Member)

module.exports = Report