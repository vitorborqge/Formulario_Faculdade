const router = require('express').Router();

const usersRouter = require('./users.js');
const livrosRouter = require('./livros.js');
const usuarioRouter = require('./usuario.js');

router.get('/', (request, response) => {
  return response.render('index', { title: 'Express' });
})

router.use('/users', usersRouter);
router.use('/livros', livrosRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;