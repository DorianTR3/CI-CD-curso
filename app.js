const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Esta es una respuesta sencilla');
});

app.get('/suma', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        return res.status(400).send('Debes enviar numeros validos en a y b');
    }

    res.send(`El resultado de la suma es: ${a + b}`);
});

module.exports = app;
