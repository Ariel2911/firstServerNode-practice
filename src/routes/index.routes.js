const express = require("express");
const controller = require("../controllers/index.controller");

const router = express.Router();

router
  .get("/", controller.index)
  .get("/node", controller.node)
  .get("/express", controller.express)
  .get("/pug", controller.pug)
  .get("/licencias", controller.licenses)

module.exports = router;
