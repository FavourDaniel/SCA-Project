const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('respond with Hello World', (done) => {
    request(app).get('/').expect('Hello World', done);
  });
});
