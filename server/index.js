/* eslint-disable linebreak-style */
const path = require('path');
const express = require('express');

const port = 3000;
const distPath = path.resolve(__dirname, '..', 'dist');
const app = express();
// eslint-disable-next-line no-unused-vars
const DB = require('../DB/index');

app.use(express.json()); // Parse the request body
app.use(express.urlencoded({ extended: true })); // Parses url
app.use(express.static(distPath)); // Statically serve up client directory
// eslint-disable-next-line linebreak-style

app.listen(port, () => {
  console.log(`
  Listening at: http://ec2-54-68-83-206.us-west-2.compute.amazonaws.com:${port}
  `);
});
