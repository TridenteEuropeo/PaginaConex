import { Router } from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import Usuario from "../models/Usuario";

const router = Router();

//Renderizado de nuestras rutas
router.get("/", (req, res) => {
  res.render("index");
});
router.post("/Usuario/add", async (req, res) => {
  const usuario = Usuario(req.body);

  const usuarioGuardado = await usuario.save();
  console.log(usuarioGuardado);
  res.send("Registrando Usuario");
});
router.get("/Formulario", (req, res) => {
  res.render("formulario");
});
router.get("/personajes", (req, res) => {
  res.render("personajes");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
