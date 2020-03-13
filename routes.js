//Desectructuración
//const { Cliente, Articulo } = require('./models.js');
// ./ porque no es un modulo de nodes
// llaves desestructuración
//Al usar controlador ya no necesita el modelo

const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


//router se crea con express, y para ello hay que importarla
const router = express.Router();

//--------------API REST CRUD
//Métodos de http

/* //Read All
router.get('/clientes', controller.listarClientes);
//Se mandan los datos en formato json no las vistas como en Symfony por ejemplo

//Read
router.get('/clientes/:id', controller.readCliente);
//_id: campo de la colección(dentro de la colección Cliente, se creaba solo como _id), id: el parámetro de la dirección(nombre de la variable) 

//parametros son los que aparecen en la url con :

//Delete
router.delete('/clientes/:id', controller.deleteCliente);
//Delete: porque es un método http, es obligatorio


//Update
router.put('/clientes/:id', controller.updateCliente);
//Put: porque es un método http, es obligatorio que se llame así

//Create
router.post('/clientes/', controller.createCliente); */

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/productos",     cors(), controller.readProductos);  // Read All
router.get    ("/productos/:id", cors(), controller.readProducto);   // Read
router.delete ("/productos/:id", cors(), controller.deleteProducto); // Delete
router.put    ("/productos/:id", cors(), controller.updateProducto); // Update
router.post   ("/productos",     cors(), controller.createProducto); // Create

module.exports = router;