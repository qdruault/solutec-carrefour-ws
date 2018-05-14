const models = require('../models')

const populateCoworker = require('./populateCoworker')
const populateProduct = require('./populateProduct')
const populateProblem = require('./populateProblem')
const populateCountry = require('./populateCountry')
const populateSupplier = require('./populateSupplier')

models.sequelize.sync({force: true})
    .then(() => console.log("Populate is beginning..."))
    .then(() => console.log("Populating coworkers..."))
    .then(() => populateCoworker())
    .then(() => console.log("Populating products..."))
    .then(() => populateProduct())
    .then(() => console.log("Populating problems..."))
    .then(() => populateProblem())
    .then(() => console.log("Populating countries..."))
    .then(() => populateCountry())
    .then(() => console.log("Populating suppliers..."))
    .then(() => populateSupplier())
    .then(() => console.log("Populate done."))
.then(() => process.exit(0))
.catch(e => {
  console.log(e);
  process.exit(1);
})
