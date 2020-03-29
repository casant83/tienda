//Accede directamente al modelo, por eso:
const {Receta} = require('./models.js');

//Exportaciones

exports.readRecetas = (req, res) => {
    Receta.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readReceta = (req, res) => {
    Receta.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteReceta = (req, res) => {
    Receta.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateReceta = (req, res) => {
    Receta.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, ingredientes: req.body.ingredientes, preparacion:req.body.preparacion, comentarios:req.body.comentarios, valoracion:req.body.valoracion } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createReceta = (req, res) => {
    const receta = new Receta({ nombre: req.body.nombre, ingredientes: req.body.ingredientes, preparacion:req.body.preparacion, comentarios:req.body.comentarios, valoracion:req.body.valoracion });
    receta.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}
