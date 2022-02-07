import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb+srv://tridenteeuropeo:tridenteeuropeo@cluster0.rrxyb.mongodb.net/UsuariosDoctorStrange?retryWrites=true&w=majority");
    console.log("DB contectado a ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
