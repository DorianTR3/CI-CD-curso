const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Esta es una respuesta sencilla');
});

module.exports = app;