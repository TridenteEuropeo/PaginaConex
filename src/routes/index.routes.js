import { Router } from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import Usuario from "../models/Usuario";
import {
  anadirUsuario,
  paginaFormulario,
  paginaPersonajes,
  renderUsuarios,
} from "../controllers/usuario.controllers";
const router = Router();

//Renderizado de nuestras rutas
router.get("/", renderUsuarios);
router.post("/Usuario/add", anadirUsuario);
router.get("/Formulario", paginaFormulario);
router.get("/personajes", paginaPersonajes);

export default router;
