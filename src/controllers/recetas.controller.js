const recetas = require('../data/recetas.json');
const { filtrarRecetas } = require('../utils/filters');

const obtenerRecetas = (req, res) => {
    const { nombre, ingrediente, cantidad } = req.query;
    let resultados = recetas;
    
    if (nombre || ingrediente || cantidad) {
        resultados = filtrarRecetas(recetas, nombre, ingrediente, cantidad);
    }

    res.json(resultados);
};

module.exports = { obtenerRecetas };
