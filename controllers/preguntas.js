const Javacat1 = require("../models/java/javaCat1");
const Javacat2 = require("../models/java/javaCat2");
const Javacat3 = require("../models/java/javaCat3");
const Javacat4 = require("../models/java/javaCat4");
const Javacat5 = require("../models/java/javaCat5");

/* Endpoints de preguntas java */
const preguntasJavaCat1 = (req, res) => {
  const javaCat1 = new Javacat1();
  const javaCat2 = new Javacat2();
  const javaCat3 = new Javacat3();
  const javaCat4 = new Javacat4();
  const javaCat5 = new Javacat5();
  const {
    categoria,
    pregunta,
    respuesta1,
    respuesta2,
    respuesta3,
    respuesta4,
    correcta,
  } = req.body;
  console.log(correcta);
  /* Validar datos todos son obligatorios */
  if (
    (!categoria || !pregunta || !respuesta1,
    !respuesta2,
    !respuesta3,
    !respuesta4,
    !correcta)
  ) {
    res.status(201).json({ message: "Debes ingresar todos los datos" });
    return;
  }

  if (categoria == "conceptosbasicos") {
    javaCat1.pregunta = pregunta;
    javaCat1.respuesta1 = respuesta1;
    javaCat1.respuesta2 = respuesta2;
    javaCat1.respuesta3 = respuesta3;
    javaCat1.respuesta4 = respuesta4;
    javaCat1.correcta = correcta;
    javaCat1.save((err, userStored) => {
      if (err) {
        res.status(201).json({ message: "Erorr con el servidor" });
      } else {
        res
          .status(201)
          .json({
            message:
              "La pregunta de la categoria conceptos basicos se creo correctamente",
          });
      }
    });
  } else if (categoria == "condicionales") {
    javaCat2.pregunta = pregunta;
    javaCat2.respuesta1 = respuesta1;
    javaCat2.respuesta2 = respuesta2;
    javaCat2.respuesta3 = respuesta3;
    javaCat2.respuesta4 = respuesta4;
    javaCat2.correcta = correcta;
    javaCat2.save((err, userStored) => {
      if (err) {
        res.status(201).json({ message: "Erorr con el servidor" });
      } else {
        res
          .status(201)
          .json({
            message:
              "La pregunta de la categoria condicionales se creo correctamente",
          });
      }
    });
    2;
  } else if (categoria == "ciclos") {
    javaCat3.pregunta = pregunta;
    javaCat3.respuesta1 = respuesta1;
    javaCat3.respuesta2 = respuesta2;
    javaCat3.respuesta3 = respuesta3;
    javaCat3.respuesta4 = respuesta4;
    javaCat3.correcta = correcta;
    javaCat3.save((err, userStored) => {
      if (err) {
        res.status(201).json({ message: "Erorr con el servidor" });
      } else {
        res
          .status(201)
          .json({
            message: "La pregunta de la categoria ciclos se creo correctamente",
          });
      }
    });
  } else if (categoria == "arrays") {
    javaCat4.pregunta = pregunta;
    javaCat4.respuesta1 = respuesta1;
    javaCat4.respuesta2 = respuesta2;
    javaCat4.respuesta3 = respuesta3;
    javaCat4.respuesta4 = respuesta4;
    javaCat4.correcta = correcta;
    javaCat4.save((err, userStored) => {
      if (err) {
        res.status(201).json({ message: "Erorr con el servidor" });
      } else {
        res
          .status(201)
          .json({
            message: "La pregunta de la categoria arrays se creo correctamente",
          });
      }
    });
  } else if (categoria == "poo") {
    javaCat5.pregunta = pregunta;
    javaCat5.respuesta1 = respuesta1;
    javaCat5.respuesta2 = respuesta2;
    javaCat5.respuesta3 = respuesta3;
    javaCat5.respuesta4 = respuesta4;
    javaCat5.correcta = correcta;
    console.log(correcta);
    javaCat5.save((err, userStored) => {
      if (err) {
        res.status(201).json({ message: "Erorr con el servidor" });
      } else {
        res
          .status(201)
          .json({
            message: "La pregunta de la categoria POO se creo correctamente",
          });
      }
    });
  }
};

/* Encontrar todas las preguntas de las categorias */
const encontrarPreguntas = (req, res) => {
  let preguntasJava = [];
  Javacat1.find().then((preguntas1) => {
    if (preguntas1.length === 0) {
      res.status(201).send("No hay preguntas en cat1 java");
    } else {
      preguntasJava.push(preguntas1);
      //Consulta cat 2
      Javacat2.find().then((preguntas2) => {
        if (preguntas2.length === 0) {
          res.status(201).send("No hay preguntas en cat2 java");
        } else {
          preguntasJava.push(preguntas2);
          Javacat3.find().then((preguntas3) => {
            if (preguntas3.length === 0) {
              res.status(201).send("No hay preguntas en cat3 java");
            } else {
              preguntasJava.push(preguntas3);
              Javacat4.find().then((preguntas4) => {
                if (preguntas4.length === 0) {
                  res.status(201).send("No hay preguntas en cat4 java");
                } else {
                  preguntasJava.push(preguntas4);
                  Javacat5.find().then((preguntas5) => {
                    if (preguntas5.length === 0) {
                      res.status(201).send("No hay preguntas en cat2 java");
                    } else {
                      preguntasJava.push(preguntas5);
                      res.status(200).json({ preguntasJava });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

module.exports = {
  preguntasJavaCat1,

  encontrarPreguntas,
};
