const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstadisticaSchame = Schema({
  nombre: String,
  rondaSuperada: Number,
  score: Number,
  victoria: Boolean,
});

module.exports = mongoose.model("estadisticas", EstadisticaSchame);
