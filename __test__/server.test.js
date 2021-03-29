'use strict';

const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('Server Test', () => {
  it('handle working routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Home Page');
  });
  test('handle invalid routes', async () => {
    const response = await request.get('/whatever');
    expect(response.status).toEqual(404);
  });
  it('handle bad method', async () => {
    const response = await request.post('/*');
    // expect(response.request.method).toBe('POST');
    expect(response.status).toEqual(404);
  });
});
