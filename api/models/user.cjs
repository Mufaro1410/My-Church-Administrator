// import { sequelize } from "../dbConfig";
// import { DataTypes } from "sequelize";

const sequelize = require("../db/dbConfig.cjs");
const { DataTypes } = require("sequelize");

// Define a Sequelize model
const User = sequelize.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User