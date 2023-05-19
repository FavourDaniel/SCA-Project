// testServer.js
const app = require('./server');
const http = require('http');

const testServer = http.createServer(app);
testServer.listen(() => console.log('Test server is running'));

module.exports = testServer;
