const filtrarRecetas = (recetas, nombre, ingrediente, cantidad) => {
    return recetas.filter(receta => {
        if (nombre && !receta.nombre.toLowerCase().includes(nombre.toLowerCase())) {
            return false;
        }
        if (ingrediente) {
            const ing = receta.ingredientes.find(i => i.nombre.toLowerCase() === ingrediente.toLowerCase());
            if (!ing || (cantidad && ing.cantidad < cantidad)) {
                return false;
            }
        }
        return true;
    });
};


module.exports = { filtrarRecetas };
