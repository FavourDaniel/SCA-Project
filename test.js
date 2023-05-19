// test.js
const request = require('supertest');
const testServer = require('./testServer');

describe('Server', () => {
  let server;

  beforeAll(async () => {
    server = testServer;
  });

  afterAll(async () => {
    await server.close(); // Close the testServer object after all tests have run
  });

  it('GET / should return status 200', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('GET /exists should return status 200', async () => {
    const res = await request(server).get('/exists');
    expect(res.statusCode).toEqual(200);
  });
});
