const mongoose = require('mongoose');

//se creará una colección con el nombre entre '' con la primera letra en minúscula y una s al final

const Cliente = mongoose.model('Receta',
    new mongoose.Schema({nombre: String, ingredientes: String, preparacion: String, comentarios: String, valoracion: Number})
);


//Exportar los modelos(normalmente un solo objeto)
// module.exports = {
//     Receta: Receta
// }

//Manera de simplificar en JS:
module.exports = {
    Receta
}

