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
  }

export const anadirUsuario = async (req, res) => {
    const usuario = Usuario(req.body);
  
    const usuarioGuardado = await usuario.save();
    console.log(usuarioGuardado);
    res.render("Registrando Usuario");
  }

export const paginaFormulario = (req, res) => {
    res.render("formulario");
  }

  export const paginaPersonajes = (req, res) => {
    res.render("personajes");
  }