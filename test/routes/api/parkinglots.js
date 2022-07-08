const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');

describe('/api/parkinglots', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['parkinglots']);
    testSession = session(app);
  });

  describe('GET /', () => {
    it('returns a list of ParkingLots', async () => {
      const response = await testSession.get('/api/parkinglots').expect(HttpStatus.OK);
      const parkinglots = response.body;
      assert.deepStrictEqual(parkinglots.length, 2);
    });
  });
});
