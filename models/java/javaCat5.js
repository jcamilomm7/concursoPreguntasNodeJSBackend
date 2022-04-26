const mongoose= require ('mongoose');
const Schema = mongoose.Schema;

const JavaSchame= Schema({
    pregunta: String,
    respuesta1: String,
    respuesta2: String,
    respuesta3: String,
    respuesta4: String,
    correcta: String,
});

module.exports=mongoose.model("javaCat5",JavaSchame);