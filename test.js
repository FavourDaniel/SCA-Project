const request = require('supertest');
const express = require('express');

describe('Server', () => {
  let app;

  beforeEach(() => {
    app = express();

    app.get('/', (req, res) => {
      res.status(200).send('Hello, world!');
    });
  });

  it('GET / should return status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});