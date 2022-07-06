const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.ParkingLot', () => {
  beforeEach(async () => {
    await helper.loadFixtures([]);
  });

  it('creates a new ParkingLot record', async () => {
    let parkinglot = models.ParkingLot.build({
      Title: 'Test Title',
      Text: 'This is longer test Text.',
    });
    assert.deepStrictEqual(parkinglot.id, null);
    await parkinglot.save();
    assert(parkinglot.id);

    parkinglot = await models.ParkingLot.findByPk(parkinglot.id);
    assert.deepStrictEqual(parkinglot.Title, 'Test Title');
    assert.deepStrictEqual(parkinglot.Text, 'This is text');
  });
});
