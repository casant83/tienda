//Accede directamente al modelo, por eso:
const {Cliente, Producto} = require('./models');

//Exportaciones
exports.listarClientes = (req, res) => {
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readCliente = (req, res) => {
    Cliente.findOne({ _id: req.param.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteCliente = (req, res) => {
    Cliente.findOneAndRemove({ _id: req.param.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateCliente = (req, res) => {
    Cliente.findOneAndUpdate(
        { _id: req.param.id },
        { $set: { nombre: req.body.nombre, apellidos:req.body.apellidos, direccion:req.body.direccion, telefono:req.body.telefono } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
}

exports.createCliente = (req, res) => {
    const cliente = new Cliente({nombre: req.body.nombre, apellidos: req.body.apellidos, direccion:req.body.direccion, telefono:req.body.telefono });

    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.listarProducto = (req, res) => {
    Producto.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readProducto = (req, res) => {
    Producto.findOne({ _id: req.param.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteProducto = (req, res) => {
    Producto.findOneAndRemove({ _id: req.param.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateProducto = (req, res) => {
    Producto.findOneAndUpdate(
        { _id: req.param.id },
        { $set: { nombre: req.body.nombre, apellidos:req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
}

exports.createProducto = (req, res) => {
    const producto = new Producto({nombre: req.body.nombre, apellidos: req.body.apellidos});

    producto.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}