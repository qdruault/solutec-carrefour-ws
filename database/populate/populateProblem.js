const Problem = require('../models').Problem;
const faker = require('faker');
const moment=require('moment');
function populateProblem() {
    const barcodes = [
      "3004004444447",
      "5008008111112",
      "4101001222227",
      "4103003444447",
      "5001001111110",
      "5008008222221",
      "5008008444449",
    ];
    const fakeProblems = barcodes.map(barcode => ({
          type: 'broken',
          barcodeProduct: barcode,
          idCoworker: faker.random.number({
            min: 1,
            max: 10
          }),
          photo: faker.image.imageUrl()
        })
    )

    for (i = 0; i < 5; i++) {
        fakeProblems.push({
            type: 'technical',
            idCoworker: faker.random.number({
              min: 1,
              max: 10
            }),
            photo: faker.image.imageUrl()
        })
    }

    for (i = 0; i < 5; i++) {
        fakeProblems.push({
          type: 'other',
          idCoworker: faker.random.number({
            min: 1,
            max: 10
          }),
          photo: faker.image.imageUrl()
        })
    }

    return Problem.bulkCreate(fakeProblems);
}

module.exports = populateProblem;
