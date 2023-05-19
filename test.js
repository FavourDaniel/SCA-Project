// test.js
const request = require('supertest');
const testServer = require('./testServer'); // Import the testServer object from your testServer.js file

describe('Server', () => {
  beforeAll(async () => {
    // No need to call testServer.listen(), as it's already called in testServer.js
  });

  afterAll(async () => {
    await testServer.close(); // Close the testServer object after all tests have run
  });

  it('GET / should return status 200', async () => {
    const res = await request(testServer).get('/'); // Use the testServer object instead of server
    expect(res.statusCode).toEqual(200);
  });

  it('GET /exists should return status 200', async () => {
    const res = await request(testServer).get('/exists'); // Use the testServer object instead of server
    expect(res.statusCode).toEqual(200);
  });
});