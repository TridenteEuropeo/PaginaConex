import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutDir: path.join(app.get("views"), "layout"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//Las rutas
app.use(indexRoutes);

export default app;
