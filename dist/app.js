"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// importando o modulo
// inicializando o modulo express
var app = (0, _express["default"])(); // configurando o express para usar o modulo body-parser

app.use(_bodyParser["default"].json()); // configurando as rotas disponiveis

app.use(_routes.routes); // abrindo a porta 300 e colocando a aplicação para rodar

app.listen(3001, function () {
  return console.log('API is running!');
});