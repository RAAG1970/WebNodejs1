const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Juegaonelganador Chile 2020' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;