var router = require('express').Router();

var usuarioController = require('../controllers/usuarioController');

router.post('/create', usuarioController.create);

/* GET users listing. */
router.get('/', function(request, response) {
  return response.json({ message: 'Olá mundo, usuario' });
});

module.exports = router;
