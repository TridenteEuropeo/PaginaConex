"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _request = _interopRequireDefault(require("express/lib/request"));

var _response = _interopRequireDefault(require("express/lib/response"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var router = (0, _express.Router)(); //Renderizado de nuestras rutas

router.get("/", function (req, res) {
  res.render("index");
});
router.post("/Usuario/add", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var usuario, usuarioGuardado;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            usuario = (0, _Usuario["default"])(req.body);
            _context.next = 3;
            return usuario.save();

          case 3:
            usuarioGuardado = _context.sent;
            console.log(usuarioGuardado);
            res.send("Registrando Usuario");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/Formulario", function (req, res) {
  res.render("formulario");
});
router.get("/personajes", function (req, res) {
  res.render("personajes");
});
router.get("/edit", function (req, res) {
  res.render("edit");
});
var _default = router;
exports["default"] = _default;