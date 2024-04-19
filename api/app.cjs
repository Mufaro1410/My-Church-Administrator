// imports
// import express from "express";
// import sequelize from "./db/dbConfig";
const express = require('express')
const sequelize = require('./db/dbConfig.cjs')
const bodyParser = require('body-parser')

const app = express();

// import routes
const members = require('./routes/members.cjs')
const payment = require('./routes/payments.cjs')
const event = require('./routes/events.cjs')
const report = require('./routes/report.cjs')
const users = require('./routes/users.cjs')
const circuits = require('./routes/circuit.cjs')
const conference = require('./routes/conference.cjs')
const district = require('./routes/district.cjs')
const membership = require('./routes/membership.cjs')
const maritalStatus = require('./routes/maritalStatus.cjs')
const organisation = require('./routes/organisation.cjs')
const section = require('./routes/section.cjs')
const log = require('./routes/logs.cjs')

// middleware
app.use(bodyParser.json())

// APIs
app.use("/member", members);
app.use("/payment", payment);
app.use("/event", event);
app.use("/report", report);
app.use("/setting/user", users);
app.use("/setting/circuit", circuits);
app.use("/setting/conference", conference);
app.use("/setting/district", district);
app.use("/setting/membership", membership);
app.use("/setting/maritalStatus", maritalStatus);
app.use("/setting/organisation", organisation);
app.use("/setting/section", section);
app.use("/setting/logs", log);

// Start server
const start = async () => {
  try {
    sequelize.sync()
    // sequelize.sync({ alter: true })
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  } catch (error) {
    sequelize.close()
    console.log(error);
  }
}

start()
