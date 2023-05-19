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
      if (res.statusCode === 200) {
        done();
      } else {
        done(new Error(`Expected status code 200 but received ${res.statusCode}`));
      }
    });
  });

  it('GET /exists should return status 200', (done) => {
    http.get('http://localhost:80/exists', (res) => {
      if (res.statusCode === 200) {
        done();
      } else {
        done(new Error(`Expected status code 200 but received ${res.statusCode}`));
      }
    });
  });
});
