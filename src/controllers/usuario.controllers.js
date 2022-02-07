import Usuario from "../models/Usuario";
export const renderUsuarios = async (req, res) => {
  try {
    const tasks = await Usuario.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export const anadirUsuario = async (req, res, next) => {
  const usuario = Usuario(req.body);
  console.log(task);
  res.send("saved");
};

export const paginaFormulario = (req, res) => {
  res.render("formulario");
};

export const paginaPersonajes = (req, res) => {
  res.render("personajes");
};
