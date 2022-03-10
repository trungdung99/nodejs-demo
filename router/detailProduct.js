const express = require('express');
const route = express.Router();

route.get('/products/:id', (request, response) => {
    response.send(`
        <h1>Detail Product Page</h1>
        ${request.params.id}
    `);
});

module.exports = route;