const controller = {};

const title = "Bienvenidos a mi servidor"

controller.index = (req, res) => {

  res.render("index",{ title });
  
};

module.exports = controller;