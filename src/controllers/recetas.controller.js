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

const obtenerRecetaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const receta = recetas.find(r => r.id === id);

    if (!receta) {
        return res.status(404).json({ mensaje: "Receta no encontrada" });
    }

    res.json(receta);
};


module.exports = { obtenerRecetas, obtenerRecetaPorId };
