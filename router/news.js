const express = require('express');
const route = express.Router();

route.get('/news', (request, response) => {
    response.send(`
        <h1>News Page</h1>
    `);
});

module.exports = route;