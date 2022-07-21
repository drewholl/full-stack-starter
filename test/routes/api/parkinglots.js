const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');
const models = require('../../../models');

describe('/api/parkinglots', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['parkinglots', 'users']);
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

  context('authenticated', () => {
    beforeEach(async () => {
      await testSession
        .post('/api/auth/login')
        .set('Accept', 'application/json')
        .send({ email: 'admin.user@test.com', password: 'abcd1234' })
        .expect(HttpStatus.OK);
    });

    describe('POST /', () => {
      it('creates a new ParkingLot', async () => {
        const response = await testSession
          .post('/api/parkinglots')
          .set('Accept', 'application/json')
          .send({
            Name: 'This is a new ParkingLot Name',
            Address: 'This is a new ParkingLot Address',
            Pictures: 'https://via.placeholder.com/512',
          })
          .expect(HttpStatus.CREATED);

        const { id, Name, Address, Pictures } = response.body;
        assert(id);
        assert.deepStrictEqual(Name, 'This is a new ParkingLot Name');
        assert.deepStrictEqual(Address, 'This is a new ParkingLot Address');
        assert.deepStrictEqual(Pictures, 'https://via.placeholder.com/512');

        const parkinglot = await models.ParkingLot.findByPk(id);
        assert(parkinglot);
        assert.deepStrictEqual(parkinglot.Name, 'This is a new ParkingLot Name');
        assert.deepStrictEqual(parkinglot.Address, 'This is a new ParkingLot Address');
        assert.deepStrictEqual(parkinglot.Pictures, 'https://via.placeholder.com/512');
      });
    });

    describe('PATCH /:id', () => {
      it('updates an existing ParkingLot', async () => {
        const response = await testSession
          .patch('/api/parkinglots/1')
          .set('Accept', 'application/json')
          .send({
            Name: 'This is an updated ParkingLot Name',
            Address: 'This is an updated ParkingLot Address',
            Pictures: 'https://updated.com/url',
          })
          .expect(HttpStatus.OK);

        const { id, Name, Address, Pictures } = response.body;
        assert.deepStrictEqual(id, 1);
        assert.deepStrictEqual(Name, 'This is an updated ParkingLot Name');
        assert.deepStrictEqual(Address, 'This is an updated ParkingLot Address');
        assert.deepStrictEqual(Pictures, 'https://updated.com/url');

        const parkinglot = await models.ParkingLot.findByPk(id);
        assert(parkinglot);
        assert.deepStrictEqual(parkinglot.Name, 'This is an updated ParkingLot Name');
        assert.deepStrictEqual(parkinglot.Address, 'This is an updated ParkingLot Address');
        assert.deepStrictEqual(parkinglot.Pictures, 'https://updated.com/url');
      });
    });

    describe('DELETE /:id', () => {
      it('deletes an existing ParkingLot', async () => {
        await testSession.delete('/api/parkinglots/1').expect(HttpStatus.OK);
        const parkinglot = await models.ParkingLot.findByPk(1);
        assert.deepStrictEqual(parkinglot, null);
      });
    });
  });
});
