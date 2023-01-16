const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Metadata info about our API
const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Employee API", 
      version: "1.0.0",
      description:
        `This is a REST API application made with NodeJS and Express. 
        It retrieves data from a local SQLite database.
        To be able to create, update or delete a resource, it is necessary to register an user.
        Copy the access token, then click the "Authorize" button and then enter the token.`,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: [
    "src/v1/routes/employeeRoutes.js",
    "src/v1/routes/registerRoutes.js",
    "src/database/Employee.js"
  ],
};

// Docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

/// Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `📓 Version 1 Docs are available at http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
