const controller = {};

const home = "/"

controller.index = (req, res) => {

  const title = "Bienvenidos";
  
  const pages = {
    "/node": "NODE.JS",
    "/express":"EXPRESS",
    "/pug":"PUG",
    "/licencias":"Licencias"
  };

  res.render("index",{ title, pages, home });
  
};

controller.node = (req,res) => {

  const path = req.path.split("/");

  res.render("node", { home, path });

};

controller.express = (req,res) => {

  const path = req.path.split("/");

  res.render("express", { home, path });

};

controller.pug = (req,res) => {

  const path = req.path.split("/");

  res.render("pug", { home, path });

};

controller.licenses = (req,res) => {

  const path = req.path.split("/");

  res.render("licenses", { home, path });

};

module.exports = controller;
