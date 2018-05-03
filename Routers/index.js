const express = require('express');
const router = express.Router();
const Countries = require('./country');
const Cities = require('./city');

router.get('/', (req, res, next) => res.send('Welcome to the World'));

router.use('/cities', Cities);
router.use('/countries', Countries);

module.exports = router;
