const router = require('express').Router();

var livrosController = require('../controllers/livrosController');

router.post('/create', livrosController.create);

router.get('/', function (request, response) {
  return response.json({ message: 'olá mundo, livros' });
});


module.exports = router;
