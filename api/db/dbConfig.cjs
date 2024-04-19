// imports
// import { Sequelize } from "sequelize";
const { Sequelize } = require('sequelize');

// Create Sequelize Instance
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./church.sqlite",
});

// export const sequelize = new Sequelize('database', 'username', 'password', {
//   dialect: 'mysql', // or any other dialect
//   host: 'localhost',
//   // other options
// });

// // testing connection
// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// testConnection()

module.exports = sequelize
// export default sequelize