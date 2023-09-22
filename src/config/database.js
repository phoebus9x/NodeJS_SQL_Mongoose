require("dotenv").config();
// get the client
// const mysql = require("mysql2/promise");

const mongoose = require("mongoose");

// create the pool connect to database
// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// });

const dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];

const connection = async () => {
  // Or:

  try {
    const options = {
      user: process.env.DB_NAME,
      pass: process.env.DB_PASSWORD,
    };
    await mongoose.connect(process.env.DB_HOST, options);
    const state = Number(mongoose.connection.readyState);
    // console.log("check connection: ", mongoose.connection.readyState());
    console.log(dbState.find((f) => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    console.log("error connection DB: ", error);
  }
};

module.exports = connection;
