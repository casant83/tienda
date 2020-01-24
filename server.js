const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js');


//lanzar un aplicacion de express:
const app = express();

//conectar con una base de datos local
mongoose.connect("mongodb+srv://usuario:usuario@cluster0-dntkw.mongodb.net/tienda?retryWrites=true&w=majority", { useNewUrlParser: true })
   .then( db => console.log("Conexión a BD correcta") )
   .catch(err => console.log("Error al conectarse a BD: " + err));

//conectar con una base de datos en la nube
//MIDDLEWARE: añadir un enrutador que se encardarán de todas las direcciones que vengan de /api/

app.use(express.json()); 

app.use('/api', apiRoutes);


/* app.get("/", (req, res) => { 
    res.send("Hola") 
});

app.get("/hola", (req, res) => {
     res.send("Hola hola") 
}); */

//rutas para que el usuario se conecte a la API


//puerto en el que queremos que escuche (por ejemplo 3000, no se pueden poner puertos por debajo de 1024 a no se ruqe seas administrador)
//Tambiñén vamos a cambiar el puerto
//app.listen(3000, ()=> console.log("Servidor iniciado..."));
//3000 está bien para trabajar en local, pero para trabajar con heroku:
app.listen(process.env.PORT || 3000, ()=> console.log("Servidor iniciado..."));
