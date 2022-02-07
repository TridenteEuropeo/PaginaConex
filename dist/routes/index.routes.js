"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _request = _interopRequireDefault(require("express/lib/request"));

var _response = _interopRequireDefault(require("express/lib/response"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _usuario = require("../controllers/usuario.controllers");

var router = (0, _express.Router)(); //Renderizado de nuestras rutas

router.get("/", _usuario.renderUsuarios);
router.post("/Usuario/add", _usuario.anadirUsuario);
router.get("/Formulario", _usuario.paginaFormulario);
router.get("/personajes", _usuario.paginaPersonajes);
var _default = router;
exports["default"] = _default;