const mongoose = require('mongoose');

//se creará una colección con el nombre entre '' con la primera letra en minúscula y una s al final

const Cliente = mongoose.model('Cliente',
    new mongoose.Schema({nombre: String, apellidos: String, direccion: String, telefono: Number})
);
const Producto = mongoose.model('Producto',
    {nombre: String, precio: Number, cantidad: Number, codigoProducto: String}
);


//Exportar los modelos(normalmente un solo objeto)
// module.exports = {
//     Cliente: Cliente,
//     Producto: Producto
// }

//Manera de simplificar en JS:
module.exports = {
    Cliente,
    Producto
}

