const controller = {};

controller.index = (req, res) => {

  const title = "Bienvenidos a mi servidor";

  res.render("index",{ title });
  
};

module.exports = controller;