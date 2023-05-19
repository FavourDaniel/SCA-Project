const express = require('express');
const app = express();

// Add your routes and middlewares here
// For example:
// const someRoutes = require('./routes/someRoutes');
// app.use(someRoutes);

const testServer = app.listen(0); // Listen on a random available port for testing
module.exports = testServer;
