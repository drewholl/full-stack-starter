const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.ParkingLot', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['parkinglots']);
  });

  it('creates a new ParkingLot record', async () => {
    let parkinglot = models.ParkingLot.build({
      Name: 'Test Title',
      Address: 'This is longer test Text.',
    });
    assert.deepStrictEqual(parkinglot.id, null);
    await parkinglot.save();
    assert(parkinglot.id);

    parkinglot = await models.ParkingLot.findByPk(parkinglot.id);
    assert.deepStrictEqual(parkinglot.Name, 'Test Title');
    assert.deepStrictEqual(parkinglot.Address, 'This is longer test Text.');
  });
  it('fetches all the ParkingLots', async () => {
    const results = await models.ParkingLot.findAll();
    assert.deepStrictEqual(results.length, 2);
  });
});
