const express = require("express");
const PreguntasController = require("../controllers/preguntas");


const api = express.Router();
api.post("/registrar-java1", PreguntasController.preguntasJavaCat1);
api.post("/registrar-java2", PreguntasController.preguntasJavaCat2);
api.post("/registrar-java3", PreguntasController.preguntasJavaCat3);
api.post("/registrar-java4", PreguntasController.preguntasJavaCat4);
api.post("/registrar-java5", PreguntasController.preguntasJavaCat5);
api.get("/encontrar-cat-java", PreguntasController.encontrarPreguntas);
 

module.exports = api;
