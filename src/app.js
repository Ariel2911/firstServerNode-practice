const express = require("express");
const routes = require("./routes/index.routes");

const app = express();

app.use(routes);

app.listen(3000, () => {
  console.log("Servidor a la espera de conexiones en el puerto 3000")
});

