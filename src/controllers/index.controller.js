const controller = {};

controller.index = (req, res) => {

  const title = "Bienvenidos";
  const pages = {
    "/node": "NODE.JS",
    "/express":"EXPRESS",
    "/pug":"PUG",
    "/licencias":"Licencias"
  }

  res.render("index",{ title, pages });
  
};

module.exports = controller;