const request = require('supertest');
const app = require('./server'); // Import the Express app instance from your server.js file

describe('Server', () => {
  it('GET / should return status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('GET /exists should return status 200', async () => {
    const res = await request(app).get('/exists');
    expect(res.statusCode).toEqual(200);
  });
});