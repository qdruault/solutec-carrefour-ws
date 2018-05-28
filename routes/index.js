const countryRoutes = require('./country-routes')
const coworkerRoutes = require('./coworker-routes')
const problemRoutes = require('./problem-routes')
const productRoutes = require('./product-routes')
const supplierRoutes = require('./supplier-routes')
const authRoutes = require('./auth-routes')
const notifRoutes = require('./notif-routes')

// Crétaion des routes.
module.exports = function createRoutes(app, io) {

    // Les grandes catégories des routes.
    app.use('/login', authRoutes);
    app.use('/country', countryRoutes);
    app.use('/coworker', coworkerRoutes);
    app.use('/problem', problemRoutes);
    app.use('/product', productRoutes);
    app.use('/supplier', supplierRoutes);
    app.use('/notif', notifRoutes);


};
