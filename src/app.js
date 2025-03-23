// src/app.js
const express = require('express');
const cors = require('cors');
const recetasRoutes = require('./routes/recetas.routes');
const swaggerDocs = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recetas', recetasRoutes);
swaggerDocs(app);

module.exports = app;