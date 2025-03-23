// src/app.js
const express = require('express');
const cors = require('cors');
const recetasRoutes = require('./routes/recetas.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recetas', recetasRoutes);

module.exports = app;