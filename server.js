const express = require('express');
const mongoose = require('mongoose');



//lanzar un aplicacion de express:
const app = express();

//conectar con una base de datos
mongoose.connect("mongodb://localhost:27017/tienda", { useNewUrlParser: true })
   .then( db => console.log("Conexión a BD correcta") )
   .catch(err => console.log("Error al conectarse a BD: " + err));

app.get("/", (req, res) => { 
    res.send("Hola") 
});

app.get("/hola", (req, res) => {
     res.send("Hola hola") 
});

//puerto en el que queremos que escuche (por ejemplo 3000, no se pueden poner puertos por debajo de 1024 a no se ruqe seas administrador)
app.listen(3000, ()=> console.log("Servidor iniciado..."));
