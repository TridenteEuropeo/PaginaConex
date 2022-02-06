import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://localhost/doctorStrange");
    console.log("DB contectado a ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
