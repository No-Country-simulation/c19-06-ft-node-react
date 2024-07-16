import express from "express";
import { config } from "./config";
import { swaggerDocs as V1SwaggerDocs } from "./services/swagger/swagger";
import { sequelize } from "./database/database";
import v1 from "./web/v1/router";

const app = express();
const port = config.api.port;

app.use(express.json()); // middleware for parsing application/json

app.use("/v1", v1);

const Server = async () => {
  console.log("Starting server...");
  try {
    await sequelize.authenticate({ logging: false });
    console.log("Database connection has been established successfully.");
    app.listen(port, () => {
      V1SwaggerDocs(app, port);
    });
    void Promise.resolve();
  } catch (error) {
    console.error("Unable to start the server:", error);
    void Promise.reject(error);
  }
};

Server()
  .then(() => {
    console.log(`Server started on PORT ${config.api.port} in ${performance.now()} ms`);
    console.log("Go! Go! Go!");
  })
  .catch((error) => {
    console.error(`Error starting server: ${error}`);
  });
