"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

require("./utils/mongoose");

_app["default"].listen(3000);

console.log("Servidor en puerto", 3000);