const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchame = Schema({
  contrasena: String,
  nombre: {
    type: String,
    unique: true,
  },
  role: String,
});

module.exports = mongoose.model("usuarios", UserSchame);
