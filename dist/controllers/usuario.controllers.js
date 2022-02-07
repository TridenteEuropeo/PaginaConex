"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderUsuarios = exports.paginaPersonajes = exports.paginaFormulario = exports.anadirUsuario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var renderUsuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Usuario["default"].find().lean();

          case 3:
            tasks = _context.sent;
            res.render("index", {
              tasks: tasks
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log({
              error: _context.t0
            });
            return _context.abrupt("return", res.render("error", {
              errorMessage: _context.t0.message
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function renderUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderUsuarios = renderUsuarios;

var anadirUsuario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var usuario;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            usuario = (0, _Usuario["default"])(req.body);
            console.log(task);
            res.send("saved");

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function anadirUsuario(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.anadirUsuario = anadirUsuario;

var paginaFormulario = function paginaFormulario(req, res) {
  res.render("formulario");
};

exports.paginaFormulario = paginaFormulario;

var paginaPersonajes = function paginaPersonajes(req, res) {
  res.render("personajes");
};

exports.paginaPersonajes = paginaPersonajes;