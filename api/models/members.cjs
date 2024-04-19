// import { sequelize } from "../dbConfig";
// import { DataTypes } from "sequelize";

const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

const Section = require('./section.cjs')
const MaritalStatus = require('./maritalStatus.cjs')
const Membership = require('./membership.cjs')
const Organisation = require('./organisation.cjs')

// Define a Sequelize model
const Member = sequelize.define("member", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  gender: {
    type:DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Section.hasMany(Member)
Member.belongsTo(Section)

MaritalStatus.hasMany(Member)
Member.belongsTo(MaritalStatus)

Membership.hasMany(Member)
Member.belongsTo(Membership)

Organisation.belongsToMany(Member, {through: 'memberorganisation'})
Member.belongsToMany(Organisation, {through: 'memberorganisation'})

module.exports = Member