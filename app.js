const express = require("express");

const app = express();

app.get("/", (req, res) => {

  res.send("Conexión exitosa");
  
});

app.listen(3000, () => {
  console.log("Servidor a la espera de conexiones en el puerto 3000")
});

