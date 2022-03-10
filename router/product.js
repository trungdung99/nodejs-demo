const express = require('express');
const route = express.Router();

route.get('/products', (request, response) => {
    response.send(`
        <h1>Product Page</h1>
    `);
});

module.exports = route;