// 'use strict';

require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const sequelize = require('./app/models/index.js');
// const { port } = require('./app/config/db.config.js');

// const app = express();

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(require('./app/routes/turorial.routes'));

// sequelize.sync({ force: false })
//     .then(() => app.listen(port, () => console.log(`Listening on port: ${port}`)))
//     .catch(e => console.error(e));

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to send cookies or authentication headers
  optionsSuccessStatus: 204, // Set the status code for successful preflight requests
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || localhost;
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on port ${PORT}.`);
});
