const express = require("express");
const routes = require("./routes/index.routes");
const path = require("path"); // Se utiliza para normalizar las rutas de los sistemas operativos

const app = express();

app.set("view engine", "pug");// Configura el motor de vistas
app.set("views", path.join(__dirname,"views"));// Configura el directorio donde buscara las vistas

app.use(routes);

app.use(express.static(path.join(__dirname, "../public")));// Establece en que directorio se buscaran los archivos estáticos 

// En el caso de no encontrar la ruta solicitada se dará la siguiente respuesta
app.use((req, res) => {
  
  res.status(404);

  res.sendFile(path.join(__dirname,"../public/404.html"));

});

// app queda a la espera de conexiones
app.listen(3000, () => console.log("Servidor a la espera de conexiones en el puerto 3000"));

