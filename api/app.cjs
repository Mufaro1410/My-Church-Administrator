// import express from "express";
// import sequelize from "./db/dbConfig";
const express = require('express')
const sequelize = require('./db/dbConfig.cjs')

const app = express();

// import routes
const users = require('./routes/users.cjs')
const members = require('./routes/members.cjs')
const circuits = require('./routes/circuit.cjs')
const conference = require('./routes/conference.cjs')
const district = require('./routes/district.cjs')
const event = require('./routes/events.cjs')
const log = require('./routes/logs.cjs')
const maritalStatus = require('./routes/maritalStatus.cjs')
const membership = require('./routes/membership.cjs')
const organisation = require('./routes/organisation.cjs')
const payment = require('./routes/payments.cjs')
const report = require('./routes/report.cjs')
const section = require('./routes/section.cjs')

// Define routes
app.use("/settings/users", users);
app.use("/members", members);
app.use("/settings/circuits", circuits);
app.use("/settings/conference", conference);
app.use("/settings/district", district);
app.use("/events", event);
app.use("/settings/logs", log);
app.use("/settings/maritalStatus", maritalStatus);
app.use("/settings/membership", membership);
app.use("/settings/organisation", organisation);
app.use("/payment", payment);
app.use("/report", report);
app.use("/settings/section", section);

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
