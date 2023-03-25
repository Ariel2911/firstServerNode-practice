const controller = {};

controller.index = (req, res) => {

  res.send("Conexión exitosa desde index.controller");
  
};

module.exports = controller;