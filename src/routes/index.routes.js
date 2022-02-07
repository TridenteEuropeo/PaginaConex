import { Router } from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import Usuario from "../models/Usuario";

const router = Router();

//Renderizado de nuestras rutas
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
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
