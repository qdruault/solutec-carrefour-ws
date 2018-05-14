const Country = require('../models').Country;

function populateCountry() {
    const fakeCountrys = []
    fakeCountrys.push({
        id: "010",
        name: "USA",
    })
    fakeCountrys.push({
        id: "300",
        name: "France",
    })
    fakeCountrys.push({
        id: "410",
        name: "Allemagne",
    })
    fakeCountrys.push({
        id: "500",
        name: "Grande-Bretagne",
    })

    return Country.bulkCreate(fakeCountrys);
}

module.exports = populateCountry;
