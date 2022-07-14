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

  describe('GET /:id', () => {
    it('returns one ParkingLot by id', async () => {
      const response = await testSession.get('/api/parkinglots/2').expect(HttpStatus.OK);
      const parkinglot = response.body;
      assert.deepStrictEqual(parkinglot.Name, 'Test fixture 2.');
      assert.deepStrictEqual(parkinglot.Address, 'This is test fixture 2 long address.');
    });

    it('returns NOT FOUND for an id not in the database', async () => {
      await testSession.get('/api/parkinglots/0').expect(HttpStatus.NOT_FOUND);
    });
  });
});
