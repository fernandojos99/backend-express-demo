import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mi API",
      version: "1.0.0",
    },
    // components: {
    //     securitySchemes: {
    //       bearerAuth: {
    //         type: "http",
    //         scheme: "bearer",
    //         bearerFormat: "JWT",
    //       },
    //     },
    //   },
  },
  apis: ["./routes/*.js"], // donde documentas rutas
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;