const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('To send: last result of temperature'));

router.get('/:n', (req, res) => res.send(`To send: last ${req.params.n} result of temperature`));

router.get('/:n/avg', (req, res) => res.send(`To send: average of last ${req.params.n} result of temperature`));

module.exports = router
