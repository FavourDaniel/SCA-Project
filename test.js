const request = require('supertest');
const app = require('./server'); // import the app object from your server.js file

describe('Server', () => {
  beforeAll(async () => {
    await app.listen(80); // initialize the app object by calling app.listen
  });

  afterAll(async () => {
    await app.close(); // close the app object after all tests have run
  });

  it('GET / should return status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('GET /exists should return status 200', async () => {
    const res = await request(app).get('/exists');
    expect(res.statusCode).toEqual(200);
  });
});
