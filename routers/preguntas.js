const express = require("express");
const PreguntasController = require("../controllers/preguntas");

const api = express.Router();
api.post("/registrar-preguntas", PreguntasController.preguntasJavaCat1);
api.get("/encontrar-cat-java", PreguntasController.encontrarPreguntas);

module.exports = api;
