const Usuario = require("../models/usuario");
const Estadistica = require("../models/estadisticas");


//Controlador funcionando correctamente
const signUp = (req, res) => {
  const usuario = new Usuario();
  const { nombre, contrasena } = req.body;
  usuario.nombre = nombre;
  usuario.contrasena = contrasena; 

  if (nombre === "jcamilomm7") {
    usuario.role = "administrador";
  } else {
    usuario.role = "usuario";
  }
  if (!usuario.nombre || !usuario.contrasena) {
    res.status(201).json({ message: "Debes ingresar todos los datos" });
  } else {
    usuario.save((err, userStores) => {
      if (err) {
        res
          .status(201)
          .json({ message: "El usuario ya esta en uso. Debes ingresar otro" });
      } else {
        res.status(201).json({ message: userStores });
      }
    });
  }
};

//Controlador funcionando correctamente
const iniciarSesion = (req, res) => {
  const usuario = new Usuario();
  const { nombre, contrasena } = req.body;
  usuario.nombre = nombre;
  usuario.contrasena = contrasena;  //esta bien

 if (!usuario.nombre) {
    res.status(500).send({ message: "Debes ingresar el nombre de usuario" });
  } else if(!usuario.contrasena) {
    res.status(500).send({ message: "Debes ingresar la contraseña" });
  } else{
    Usuario.findOne({ nombre }, (err, userStored) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor" });
      } else {
        if(!userStored){
        res.status(500).send({ message: "Login incorrecto. Coloca las credenciales correctamente" });
        }else{
          console.log(userStored);
          res.status(500).send({ message: userStored });
        }
      }
    });
  }
};

//ya funciono
const registroEstadisticas = (req, res) => {
  const estadisticas = new Estadistica();
  const { nombre, rondaSuperada, score, victoria } = req.body;

  estadisticas.nombre = nombre;
  estadisticas.rondaSuperada = rondaSuperada;
  estadisticas.score = score;
  estadisticas.victoria = victoria;
  console.log(req.body);

  estadisticas.save((err, estadisticas) => {
    if (err) {
      res.status(201).json({ message: "Error con el servidor" });
    } else {
      res.status(201).json({ message: "Estadisticas almacenadas" });
    }
  });
};

//Historico personal

const historicoPersonal = (req, res) => {
  Estadistica.find().then((users) => {
    if (users.length === 0) {
      res.status(201).send("no se ha encontado ningun usuario");
    } else {
      res.status(200).json(users);
    }
  });
};

module.exports = {
  signUp,
  registroEstadisticas,
  iniciarSesion,
  historicoPersonal,
};
