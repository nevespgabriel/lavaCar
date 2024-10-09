/*
  Incializa o servidor
  Carrega os serviços
*/

import e from "express";
import cliente_route from "./routes/cliente_route.js";
import veiculo_route from "./routes/veiculo_route.js";
import funcionario_route from "./routes/funcionario_route.js";
import "dotenv/config";
import "./config/db.js"

const app = e();

app.use(e.json());

app.use("/cliente", cliente_route);
app.use("/veiculo", veiculo_route);
app.use("/funcionario", funcionario_route);

app.listen(process.env.API_PORT, () => console.log(`Server running at ${process.env.API_PORT}`))