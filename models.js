const mongoose = require('mongoose');

//se creará una colección con el nombre entre '' con la primera letra en minúscula y una s al final

const Cliente = mongoose.model('Cliente',
    new mongoose.Schema({nombre: String, apellidos: String})
);
const Articulo = mongoose.model('Articulo',
    {nombre: String, precio: Number}
);


//Exportar los modelos(normalmente un solo objeto)
module.exports = {
    Cliente: Cliente,
    Articulo: Articulo
}

//Manera de simplificar en JS:
// module.exports = {
//     Cliente,
//     Articulo
// }

