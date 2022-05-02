const { RegisterCoordenates } = require("../controller/mapaController");

const routes = require("express").Router();

routes.post("/saveCoordinates", RegisterCoordenates);

module.exports = routes;
