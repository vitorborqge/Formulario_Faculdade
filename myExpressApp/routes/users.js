var router = require('express').Router();

/* GET users listing. */
router.get('/', function(request, response) {
  return response.json({ message: 'Olá mundo, users' });
});

module.exports = router;
