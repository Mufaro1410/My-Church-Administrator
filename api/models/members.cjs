// import { sequelize } from "../dbConfig";
// import { DataTypes } from "sequelize";

const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

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

module.exports = Member