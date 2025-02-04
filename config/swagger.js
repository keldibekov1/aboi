import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "Admin va Superadmin uchun user management API",
    },
    servers: [
      {
        url: "http://localhost:3005",
      },
    ],
  },
  apis: ["./routes/user.routes.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger docs: http://localhost:3005/api-docs");
};

export default swaggerDocs;
