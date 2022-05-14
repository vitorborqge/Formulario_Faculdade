const express = require('express');
const appRouter = require('./routes/index.js');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// DEFINE MONGODB
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado ao banco de dados!");
  })
  .catch(err => {
    console.log("Erro na conexão com o banco de dados!", err);
    process.exit();
  });
//





app.use(appRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req);
  console.log(res);
  next(createError(404));
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/**
 * Global error handler
 */
app.use((error, request, response, next) => {
  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  // render the error page
  response.status(error.status || 500);
  response.render('error');
});

app.listen(3000, () => console.log('Server started at Port 3000'));