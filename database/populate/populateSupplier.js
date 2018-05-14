const Supplier = require('../models').Supplier;
const faker = require('faker');

function populateSupplier() {
    const fakeSuppliers = [];
    const suppliers = [ "01001", "03003", "04004", "08008"];

    for (supplier of suppliers) {
      const supplierName = faker.company.companyName();
      fakeSuppliers.push({
          id: supplier,
          name: supplierName,
          idCountry: country,
      })
    }

    return Supplier.bulkCreate(fakeSuppliers);
}

module.exports = populateSupplier;
