const { paginaMapa } = require("../public/views/index");

const routes = require("express").Router();

routes.get("/mapa", paginaMapa);

module.exports = routes;
