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

controller.node = (req,res) => {
  res.render("node")
};

controller.express = (req,res) => {
  res.render("express")
};

controller.pug = (req,res) => {
  res.render("pug")
};

controller.licenses = (req,res) => {
  res.render("licenses")
}

module.exports = controller;
