const express = require("express");
const UsuariosController = require("../controllers/usuarios");

const api = express.Router();
api.post("/registrar-usuario", UsuariosController.signUp);
api.post("/estadisticas-usuario", UsuariosController.registroEstadisticas);
api.post("/iniciarsesion-usuario", UsuariosController.iniciarSesion);
api.get("/historico-personal", UsuariosController.historicoPersonal);
module.exports = api;
