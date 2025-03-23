const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Recetas",
            version: "1.0.0",
            description: "API para listar y filtrar recetas",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor Local",
            },
        ],
    },
    apis: ["src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
