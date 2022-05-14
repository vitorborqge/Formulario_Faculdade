/*
const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.livros = require("./livros.model.js")(mongoose);
module.exports = db;


const dbConfig2 = require("../config/db.config.js");
const mongoose2 = require("mongoose");
mongoose2.Promise = global.Promise;
const db2 = {};
db2.mongoose2 = mongoose2;
db2.url = dbConfig2.url;
db2.usuario = require("./usuario.model.js")(mongoose2);
module.exports = db2;*/



const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.usuario = require("./usuario.model")(mongoose);
module.exports = db;
