const express = require("express");
const routes = require("./routes/index.routes");
const path = require("path"); // Se utiliza para normalizar las rutas de los sistemas operativos

const app = express();

app.use(routes);

app.use(express.static(path.join(__dirname, "../public")))

app.use((req, res) => {
  res.sendFile(path.join(__dirname,"../public/404.html"))
})

app.listen(3000, () => {
  console.log("Servidor a la espera de conexiones en el puerto 3000")
});

