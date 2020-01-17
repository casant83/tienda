//Desectructuración
const { Cliente, Articulo } = require('./models.js');
// ./ porque no es un modulo de nodes

const express = require('express');

//router se crea con express, y para ello hay que importarla
const router = express.Router();

//--------------API REST CRUD
//Métodos de http

//Read All
router.get('/clientes', (req, res) => {
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

//Read
router.get('/clientes/:id', (req, res) => {
    Cliente.findOne({ _id: req.param.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

//parametros son los que aparecen en la url con :

//Delete
router.delete('/clientes/:id', (req, res) => {
    Cliente.findOneAndRemove({ _id: req.param.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

//Update
router.put('/clientes/:id', (req, res) => {
    Cliente.findOneAndUpdate(
        { _id: req.param.id },
        { $set: { nombre: req.body.nombre, apellidos:req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

//Create
router.post('/clientes/', (req, res) => {
    const cliente = new Cliente({nombre: req.body.nombre, apellidos: req.body.apellidos});

    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

module.exports= router;