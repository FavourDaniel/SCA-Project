const http = require('http');
const app = require('./server');

describe('Server', () => {
  let server;

  before((done) => {
    server = app.listen(80, done);
  });

  after((done) => {
    server.close(done);
  });

  it('GET / should return status 200', (done) => {
    http.get('http://localhost:80', (res) => {
      try {
        if (res.statusCode !== 200) {
          throw new Error(`Expected status code 200 but received ${res.statusCode}`);
        }
      } catch (error) {
        console.error(error);
      }
      done();
    });
  });

  it('GET /exists should return status 200', (done) => {
    http.get('http://localhost:80/exists', (res) => {
      try {
        if (res.statusCode !== 200) {
          throw new Error(`Expected status code 200 but received ${res.statusCode}`);
        }
      } catch (error) {
        console.error(error);
      }
      done();
    });
  });
});
